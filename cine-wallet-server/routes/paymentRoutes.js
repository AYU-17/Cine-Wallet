import express from "express";
import {protect} from "../middleware/authMiddleware.js";
import {  createOrder,  verifyPayment } from "../controllers/paymentController.js";

const paymentRoutes = express.Router();

paymentRoutes.post("/create-order", protect, createOrder);
paymentRoutes.post("/verify", protect, verifyPayment);

export default paymentRoutesr;
