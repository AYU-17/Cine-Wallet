import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    movieId: {
      type: Number,
      required: true,
    },

    movieTitle: {
      type: String,
      required: true,
    },

    poster: String,

    seats: [String],

    showDate: {
      type: String,
      required: true,
    },

    showTime: {
      type: String,
      required: true,
    },

    totalAmount: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "confirmed",
    },

    qrCode: String,
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Booking", bookingSchema);
