import Watchlist from "../models/Watchlist.js";

export const addWatchlist = async (req, res) => {
  try {
    const watchlist = await Watchlist.create({
      user: req.user._id,

      movieId: req.body.movieId,

      title: req.body.title,

      poster: req.body.poster,
    });

    res.status(201).json(watchlist);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getWatchlist = async (req, res) => {
  try {
    const movies = await Watchlist.find({
      user: req.user._id,
    });

    res.json(movies);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
