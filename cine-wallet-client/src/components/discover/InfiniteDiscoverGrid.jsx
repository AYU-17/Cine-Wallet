import { useEffect } from "react";

import { useInView } from "react-intersection-observer";

import MovieCard from "../movie/MovieCard";

import Loader from "../ui/Loader";

import { useDiscoverStore } from "../../store/discoverStore";

import { useInfiniteMovies } from "../../hooks/useInfiniteMovies";

const InfiniteDiscoverGrid = () => {
  const {
    genre,
    sortBy,
  } = useDiscoverStore();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteMovies(
    genre,
    sortBy
  );

  const { ref, inView } =
    useInView();

  useEffect(() => {
    if (
      inView &&
      hasNextPage
    ) {
      fetchNextPage();
    }
  }, [
    inView,
    hasNextPage,
    fetchNextPage,
  ]);

  if (isLoading) return <Loader />;

  const movies =
    data?.pages.flatMap(
      (page) => page.results
    ) || [];

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}

      </div>

      <div
        ref={ref}
        className="h-20 flex items-center justify-center"
      >
        {isFetchingNextPage && (
          <Loader />
        )}
      </div>
    </>
  );
};

export default InfiniteDiscoverGrid;