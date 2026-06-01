import express from "express";
import {protect} from "../middleware/authMiddleware.js";
import { createBooking, getBookings, getBookingById, cancelBooking} from "../controllers/bookingController.js";

const bookingRouter = express.Router();

bookingRouter.post("/", protect, createBooking);
bookingRouter.get("/", protect, getBookings);
bookingRouter.get("/:id", protect, getBookingById);
bookingRouter.put("/cancel/:id", protect, cancelBooking);

export default bookingRouter;
