import express from "express";
import {protect} from "../middleware/authMiddleware.js";
import {admin} from "../middleware/adminMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";
import { uploadImage } from "../controllers/uploadController.js";

const uploadRoutes = express.Router();

uploadRoutes.post("/image", protect, admin, upload.single("image"), uploadImage);

export default uploadRoutes;
