import { useQuery } from "@tanstack/react-query";

import {
  fetchMovieTrailer,
} from "../services/tmdb";

export const useMovieTrailer = (
  movieId
) => {
  return useQuery({
    queryKey: [
      "movie-trailer",
      movieId,
    ],

    queryFn: () =>
      fetchMovieTrailer(movieId),

    enabled: !!movieId,
  });
};