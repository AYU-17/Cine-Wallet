import { useInfiniteQuery } from "@tanstack/react-query";

import {
  discoverMovies,
} from "../services/tmdb";

export const useInfiniteMovies = (
  genre,
  sortBy
) => {
  return useInfiniteQuery({
    queryKey: [
      "discover",
      genre,
      sortBy,
    ],

    queryFn: ({ pageParam = 1 }) =>
      discoverMovies({
        genre,
        page: pageParam,
        sortBy,
      }),

    getNextPageParam: (
      lastPage,
      allPages
    ) => {
      if (
        allPages.length <
        lastPage.total_pages
      ) {
        return allPages.length + 1;
      }

      return undefined;
    },
  });
};