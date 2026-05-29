import { create } from "zustand";

export const useDiscoverStore = create((set) => ({
  genre: "",
  page: 1,
  sortBy: "popularity.desc",

  setGenre: (genre) =>
    set({ genre }),

  setPage: (page) =>
    set({ page }),

  setSortBy: (sortBy) =>
    set({ sortBy }),
}));