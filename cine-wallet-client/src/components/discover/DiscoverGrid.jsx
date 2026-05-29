import { useEffect, useState } from "react";

import MovieCard from "../movie/MovieCard";

import Loader from "../ui/Loader";

import { discoverMovies } from "../../services/tmdb";

import { useDiscoverStore } from "../../store/discoverStore";

const DiscoverGrid = () => {
  const {
    genre,
    page,
    sortBy,
  } = useDiscoverStore();

  const [movies, setMovies] = useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);

      const data =
        await discoverMovies({
          genre,
          page,
          sortBy,
        });

      setMovies(data.results);

      setLoading(false);
    };

    loadMovies();
  }, [genre, page, sortBy]);

  if (loading) return <Loader />;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
        />
      ))}

    </div>
  );
};

export default DiscoverGrid;