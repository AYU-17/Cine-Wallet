import { useQuery } from "@tanstack/react-query";

import {
  fetchTrendingMovies,
} from "../services/tmdb";

export const useTrendingMovies = () => {
  return useQuery({
    queryKey: ["trending-movies"],
    queryFn: fetchTrendingMovies,
  });
};