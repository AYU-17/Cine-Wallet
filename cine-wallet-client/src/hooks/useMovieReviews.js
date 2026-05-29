import { useQuery } from "@tanstack/react-query";

import {
  fetchMovieReviews,
} from "../services/tmdb";

export const useMovieReviews = (
  movieId
) => {
  return useQuery({
    queryKey: [
      "movie-reviews",
      movieId,
    ],

    queryFn: () =>
      fetchMovieReviews(movieId),

    enabled: !!movieId,
  });
};