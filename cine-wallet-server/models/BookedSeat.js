import mongoose from "mongoose";

const bookedSeatSchema = new mongoose.Schema(
  {
    movieId: Number,

    showDate: String,

    showTime: String,

    seatNumber: String,
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("BookedSeat", bookedSeatSchema);
