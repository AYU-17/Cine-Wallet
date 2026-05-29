import { Play, Star, Bookmark } from "lucide-react";
import NeonButton from "../ui/NeonButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TrailerModal from "./TrailerModal";
import { useMovieTrailer } from "../../hooks/useMovieTrailer";

const MovieBanner = ({movie}) => {
  const [openTrailer, setOpenTrailer] = useState(false);
  const navigate = useNavigate()
  const { data: trailer } = useMovieTrailer(movie.id);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt="movie"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Glow */}
      <div className="absolute left-10 top-20 w-96 h-96 bg-purple-500/20 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Poster */}
        <div className="flex justify-center">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="poster"
            className="
              w-[320px]
              rounded-[30px]
              shadow-2xl
              border
              border-white/10
            "
          />
        </div>

        {/* Details */}
        <div>
          <p className="uppercase tracking-[5px] text-purple-400 mb-4">
            Sci-Fi Adventure
          </p>

          <h1 className="text-6xl font-bold leading-tight">{movie.title}</h1>

          <div className="flex items-center gap-4 mt-6 flex-wrap">
            <span className="glass px-4 py-2 rounded-full flex items-center gap-2">
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              {movie.vote_average?.toFixed(1)} Rating
            </span>

            <span className="glass px-4 py-2 rounded-full">2h 46m</span>

            <span className="glass px-4 py-2 rounded-full">{movie.release_date?.split("-")[0]}</span>
          </div>

          <p className="text-gray-300 mt-8 leading-relaxed text-lg">
            {movie.overview}
          </p>

          <div className="flex items-center gap-4 mt-10 flex-wrap">
            <div onClick={() => navigate("/booking")}>
                <NeonButton title="Book Tickets" />
            </div>

            <button
              onClick={() => setOpenTrailer(true)}
              className="glass px-6 py-3 rounded-xl flex items-center gap-2 hover:scale-105 transition"
            >
              <Play size={18} />
              Watch Trailer
            </button>

            <button className="glass p-4 rounded-xl hover:scale-105 transition">
              <Bookmark onClick={() => navigate("/watchlist")} />
            </button>
          </div>
        </div>
      </div>

      <TrailerModal
        open={openTrailer}
        setOpen={setOpenTrailer}
        videoKey={trailer?.key}
      />
    </section>
  );
};

export default MovieBanner;
