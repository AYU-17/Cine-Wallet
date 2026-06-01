import Review from "../models/Review.js";

export const createReview = async (req, res) => {
  try {
    const existing = await Review.findOne({
      user: req.user._id,
      movieId: req.body.movieId,
    });

    if (existing) {
      return res.status(400).json({
        message: "Review already exists",
      });
    }

    const review = await Review.create({
      user: req.user._id,

      movieId: req.body.movieId,

      rating: req.body.rating,

      review: req.body.review,
    });

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getMovieReviews = async (req, res) => {
  try {
    const reviews = await Review.find({
      movieId: req.params.movieId,
    })
      .populate("user", "name")
      .sort({
        createdAt: -1,
      });

    res.json(reviews);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const toggleLikeReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    const liked = review.likes.includes(req.user._id);

    if (liked) {
      review.likes = review.likes.filter(
        (id) => id.toString() !== req.user._id.toString(),
      );
    } else {
      review.likes.push(req.user._id);
    }

    await review.save();

    res.json(review);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAverageRating = async (req, res) => {
  try {
    const result = await Review.aggregate([
      {
        $match: {
          movieId: Number(req.params.movieId),
        },
      },

      {
        $group: {
          _id: null,

          average: {
            $avg: "$rating",
          },

          total: {
            $sum: 1,
          },
        },
      },
    ]);

    res.json(
      result[0] || {
        average: 0,
        total: 0,
      },
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getUserReviews = async (req, res) => {
  try {
    const reviews = await Review.find({
      user: req.user._id,
    });

    res.json(reviews);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
