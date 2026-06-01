import mongoose from "mongoose";

const watchlistSchema =
  new mongoose.Schema(
    {
      user: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "User",
      },

      movieId: Number,

      title: String,

      poster: String,
    },
    {
      timestamps: true,
    }
  );

export default mongoose.model(
  "Watchlist",
  watchlistSchema
);