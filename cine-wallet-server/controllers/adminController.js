import User from "../models/User.js";
import Booking from "../models/Booking.js";
import Review from "../models/Review.js";
import Movie from "../models/Movie.js";

export const dashboardStats = async (req, res) => {
  try {
    const revenue = await Booking.aggregate([
      {
        $group: {
          _id: null,

          totalRevenue: {
            $sum: "$totalAmount",
          },
        },
      },
    ]);

    const users = await User.countDocuments();

    const bookings = await Booking.countDocuments();

    const reviews = await Review.countDocuments();

    const movies = await Movie.countDocuments();

    res.json({
      users,
      bookings,
      reviews,
      movies,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
