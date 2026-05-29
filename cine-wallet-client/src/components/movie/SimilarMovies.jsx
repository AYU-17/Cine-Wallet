import { useEffect, useState } from "react";

import MovieCard from "./MovieCard";

import {
  fetchSimilarMovies,
} from "../../services/tmdb";

const SimilarMovies = ({
  movieId,
}) => {
  const [movies, setMovies] =
    useState([]);

  useEffect(() => {
    const loadMovies =
      async () => {
        const data =
          await fetchSimilarMovies(
            movieId
          );

        setMovies(data.slice(0, 8));
      };

    loadMovies();
  }, [movieId]);

  return (
    <section className="max-w-7xl mx-auto px-8 py-20">

      <h2 className="text-4xl font-bold mb-12">
        Similar Movies
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}

      </div>

    </section>
  );
};

export default SimilarMovies;