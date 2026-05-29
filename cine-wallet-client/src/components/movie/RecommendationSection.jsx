import movies from "../../data/movies";
import MovieCard from "./MovieCard";

const RecommendationSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">

      <h2 className="text-4xl font-bold mb-12">
        You May Also Like
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}

      </div>

    </section>
  );
};

export default RecommendationSection;