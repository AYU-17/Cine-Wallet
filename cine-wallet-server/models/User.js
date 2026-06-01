import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  resetPasswordToken: String,

  resetPasswordExpire: Date,

  isVerified: {
    type: Boolean,
    default: false,
  },

  verificationToken: String,

  watchlist: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

export default mongoose.model("User", userSchema);
