import api from "./api";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const fetchTrendingMovies = async () => {
  try {
    const response = await api.get(
      `/trending/movie/week?api_key=${API_KEY}`
    );

    return response.data.results;

  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await api.get(
      `/movie/${id}?api_key=${API_KEY}`
    );

    return response.data;

  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchMovieCredits = async (id) => {
  try {
    const response = await api.get(
      `/movie/${id}/credits?api_key=${API_KEY}`
    );

    return response.data.cast;

  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchMovieVideos = async (id) => {
  try {
    const response = await api.get(
      `/movie/${id}/videos?api_key=${API_KEY}`
    );

    return response.data.results;

  } catch (error) {
    console.log(error);
    return [];
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await api.get(
      `/search/movie?api_key=${API_KEY}&query=${query}`
    );

    return response.data.results;

  } catch (error) {
    console.log(error);
    return [];
  }
};

export const discoverMovies = async ({
  genre = "",
  page = 1,
  sortBy = "popularity.desc",
}) => {
  try {
    const response = await api.get(
      `/discover/movie?api_key=${API_KEY}&with_genres=${genre}&page=${page}&sort_by=${sortBy}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return {
      results: [],
      total_pages: 1,
    };
  }
};

export const fetchGenres = async () => {
  try {
    const response = await api.get(
      `/genre/movie/list?api_key=${API_KEY}`
    );

    return response.data.genres;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchSimilarMovies = async (
  movieId
) => {
  try {
    const response =
      await api.get(
        `/movie/${movieId}/similar?api_key=${API_KEY}`
      );

    return response.data.results;

  } catch (error) {
    return [];
  }
};

export const fetchMovieTrailer = async (
  movieId
) => {
  try {
    const response =
      await api.get(
        `/movie/${movieId}/videos?api_key=${API_KEY}`
      );

    const trailer =
      response.data.results.find(
        (video) =>
          video.site === "YouTube" &&
          video.type === "Trailer"
      );

    return trailer || null;

  } catch (error) {
    return null;
  }
};

export const fetchMovieReviews =
  async (movieId) => {
    try {
      const response =
        await api.get(
          `/movie/${movieId}/reviews?api_key=${API_KEY}`
        );

      return response.data.results;

    } catch (error) {
      return [];
    }
  };