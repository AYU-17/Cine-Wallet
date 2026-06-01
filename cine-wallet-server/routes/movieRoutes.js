import express from "express";
import {protect} from "../middleware/authMiddleware.js";
import {admin} from "../middleware/adminMiddleware.js";
import {createMovie,   getMovies,  getMovie,  updateMovie,  deleteMovie, getFeaturedMovies} from "../controllers/movieController.js";

const movieRoutes = express.Router();

movieRoutes.get("/", getMovies);
movieRoutes.get("/:id", getMovie);
movieRoutes.post("/", protect, admin, createMovie);
movieRoutes.put("/:id", protect, admin, updateMovie);
movieRoutes.delete("/:id", protect, admin, deleteMovie);
movieRoutes.get("/featured/all", getFeaturedMovies);

export default movieRoutes;
