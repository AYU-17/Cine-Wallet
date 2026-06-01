import User from "../models/User.js";
import bcrypt from "bcrypt";
import { genrateToken } from "../utils/generateToken.js";
import sendEmail from "../utils/sendEmail.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exists = await User.findOne({ email });

    if (exists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashPassword,
    });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: genrateToken(user._id),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: genrateToken(user._id),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const forgotPassword = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const resetToken = crypto.randomBytes(20).toString("hex");

    user.resetPasswordToken = resetToken;

    user.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

    await user.save();

    const url = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;

    await sendEmail(
      user.email,

      "Password Reset",

      `
          <h2>Reset Password</h2>
          <a href="${url}">
            Reset Password
          </a>
        `,
    );

    res.json({
      message: "Reset password email sent",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const user = await User.findOne({
      resetPasswordToken: req.params.token,

      resetPasswordExpire: {
        $gt: Date.now(),
      },
    });

    if (!user) {
      return res.status(400).json({
        message: "Invalid token",
      });
    }

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(req.body.password, salt);

    user.resetPasswordToken = undefined;

    user.resetPasswordExpire = undefined;

    await user.save();

    res.json({
      message: "Password updated",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const sendVerification = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    const token = crypto.randomBytes(20).toString("hex");

    user.verificationToken = token;

    await user.save();

    const url = `${process.env.CLIENT_URL}/verify-email/${token}`;

    await sendEmail(
      user.email,

      "Verify Email",

      `
          <h2>Verify Email</h2>
          <a href="${url}">
            Verify Account
          </a>
        `,
    );

    res.json({
      message: "Verification sent",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const verifyEmail = async (req, res) => {
  try {
    const user = await User.findOne({
      verificationToken: req.params.token,
    });

    if (!user) {
      return res.status(400).json({
        message: "Invalid token",
      });
    }

    user.isVerified = true;

    user.verificationToken = undefined;

    await user.save();

    res.json({
      message: "Email verified",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = await bcrypt.hash(req.body.password, 10);
    }

    const update = await user.save();

    res.json({
      _id: update._id,
      name: update.name,
      email: update.email,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
