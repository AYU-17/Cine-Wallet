import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    booking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
    },

    amount: Number,

    paymentId: String,

    status: String,
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Payment", paymentSchema);
