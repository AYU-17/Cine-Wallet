import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    poster: {
      type: String,
      required: true,
    },

    banner: {
      type: String,
      required: true,
    },

    genre: [String],

    releaseDate: Date,

    duration: String,

    rating: {
      type: Number,
      default: 0,
    },

    featured: {
      type: Boolean,
      default: false,
    },

    active: {
      type: Boolean,
      default: true,
    },

    trailerUrl: String,

    language: String,

    country: String,

    price: Number,

    ottPlatform: String,
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Movie", movieSchema);
