import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  createReview,
  getMovieReviews,
  toggleLikeReview,
  getAverageRating,
  getUserReviews,
} from "../controllers/reviewController.js";

const reviewRoutes = express.Router();

reviewRoutes.post("/", protect, createReview);
reviewRoutes.get("/movie/:movieId", getMovieReviews);
reviewRoutes.get("/rating/:movieId", getAverageRating);
reviewRoutes.put("/like/:id", protect, toggleLikeReview);
reviewRoutes.put("/my-reviews", protect, getUserReviews);

export default reviewRoutes;

// const totalReviews = await Review.countDocuments();

// const averageRating = await Review.aggregate([
//   {
//     $group: {
//       _id: null,
//       avg: {
//         $avg: "$rating",
//       },
//     },
//   },
// ]);
