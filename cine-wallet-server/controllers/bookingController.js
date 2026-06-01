import Booking from "../models/Booking.js";
import BookedSeat from "../models/BookedSeat.js";
import QRCode from "qrcode";
import generateTicket from "../utils/generateTicket.js";

export const createBooking = async (req, res) => {
  try {
    const existing = await BookedSeat.find({
      movieId: req.body.movieId,

      showDate: req.body.showDate,

      showTime: req.body.showTime,

      seatNumber: {
        $in: req.body.seats,
      },
    });

    if (existing.length > 0) {
      return res.status(400).json({
        message: "Some seats already booked",
      });
    }

    const booking = await Booking.create({
      user: req.user._id,

      movieId: req.body.movieId,

      movieTitle: req.body.movieTitle,

      poster: req.body.poster,

      seats: req.body.seats,

      showDate: req.body.showDate,

      showTime: req.body.showTime,

      totalAmount: req.body.totalAmount,
    });

    await Promise.all(
      req.body.seats.map((seat) =>
        BookedSeat.create({
          movieId: req.body.movieId,

          showDate: req.body.showDate,

          showTime: req.body.showTime,

          seatNumber: seat,
        }),
      ),
    );

    const qr = await QRCode.toDataURL(booking._id.toString());

    booking.qrCode = qr;

    await booking.save();

    const ticketPath = generateTicket(booking);

    res.status(201).json(booking, ticketPath);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({
      user: req.user._id,
    }).sort({
      createdAt: -1,
    });

    res.json(bookings);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    res.json(booking);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    booking.status = "cancelled";

    await booking.save();

    res.json({
      message: "Booking cancelled",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
