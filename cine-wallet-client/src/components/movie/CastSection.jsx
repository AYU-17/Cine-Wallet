import { useEffect, useState } from "react";
import { fetchMovieCredits } from "../../services/tmdb";

const CastSection = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  const getCast = async () => {
    const data = await fetchMovieCredits(movieId);

    setCast(data.slice(0, 8));
  };

  useEffect(() => {
    getCast();
  }, [movieId]);

  return (
    <section className="max-w-7xl mx-auto px-8 py-20">

      <h2 className="text-4xl font-bold mb-12">
        Cast & Crew
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

        {cast.map((actor) => (

          <div
            key={actor.id}
            className="
              glass
              rounded-3xl
              overflow-hidden
              text-center
              p-4
              hover:-translate-y-2
              transition
            "
          >

            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
              className="
                w-full
                h-72
                object-cover
                rounded-2xl
              "
            />

            <h3 className="mt-4 text-xl font-semibold">
              {actor.name}
            </h3>

            <p className="text-gray-400 mt-1">
              {actor.character}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
};

export default CastSection;