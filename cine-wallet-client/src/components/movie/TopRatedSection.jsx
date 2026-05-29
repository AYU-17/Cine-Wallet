import movies from "../../data/movies";
import MovieCard from "./MovieCard";
import SectionHeading from "../ui/SectionHeading";

const TopRatedSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20 overflow-hidden">

      <SectionHeading
        title="Top Rated"
        subtitle="Critically acclaimed cinematic masterpieces."
      />

      <div
        className="
          flex
          gap-8
          overflow-x-auto
          scrollbar-hide
          pb-4
        "
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="min-w-[300px] flex-shrink-0"
          >
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>

    </section>
  );
};

export default TopRatedSection;