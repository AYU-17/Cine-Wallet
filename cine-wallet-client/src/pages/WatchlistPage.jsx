import MainLayout from "../components/layout/MainLayout";
import { useMovie } from "../context/MovieContext";
import MovieCard from "../components/movie/MovieCard";

const WatchlistPage = () => {
  const { watchlist } = useMovie();

  return (
    <MainLayout>

      <section className="max-w-7xl mx-auto px-8 pt-36 pb-20">

        <h1 className="text-5xl font-bold mb-12">
          My Watchlist
        </h1>

        {watchlist.length === 0 ? (

          <div className="glass rounded-[30px] p-16 text-center">

            <h2 className="text-3xl font-bold">
              Your watchlist is empty
            </h2>

            <p className="text-gray-400 mt-4">
              Save movies to build your cinematic collection.
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {watchlist.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}

          </div>

        )}

      </section>

    </MainLayout>
  );
};

export default WatchlistPage;