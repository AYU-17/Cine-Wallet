import express from "express";
import { addWatchlist, getWatchlist} from "../controllers/watchlistController.js";
import { protect } from "../middleware/authMiddleware.js";

const watchlistRouter = express.Router();

watchlistRouter.post("/", protect, addWatchlist);
watchlistRouter.get("/", protect, getWatchlist);

export default watchlistRouter;
