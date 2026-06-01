import express from "express";
import {
  getProfile,
  loginUser,
  registerUser,
  updateProfile,
} from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const authRouter = express.Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);
authRouter.get("/profile", protect, getProfile);
authRouter.put("/update", protect, updateProfile);
authRouter.post("/forgot-password", forgotPassword);
authRouter.put("/reset-password/:token", resetPassword);
authRouter.post("/send-verification", protect, sendVerification);
authRouter.get("/verify-email/:token", verifyEmail);

export default authRouter;
