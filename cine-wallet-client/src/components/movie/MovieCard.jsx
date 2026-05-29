import { Star, Bookmark } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useMovie } from "../../context/MovieContext";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const { watchlist, toggleWatchlist } = useMovie();

  const isSaved = watchlist.find((item) => item.id === movie.id);
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        glass
        group
        cursor-pointer
      "
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      {/* Movie Image */}
      <div className="overflow-hidden">
        <img
          src={movie.image ? movie.image : `https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title || movie.name}
          className="
            h-[420px]
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Bookmark */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleWatchlist(movie);
        }}
        className=" absolute top-4 right-4-2 rounded-full glass hover:bg-purple-500/20 transition"
      >
        <Bookmark
          size={18}
          className={isSaved ? "fill-pink-500 text-pink-500" : ""}
        />
      </button>

      {/* Content */}
      <div className="absolute bottom-0 p-5 w-full">
        <div className="flex items-center gap-2 mb-2">
          <Star className="text-yellow-400 fill-yellow-400" size={16} />
          <span className="text-sm font-medium">{movie.rating || movie.vote_average?.toFixed(2)}</span>
        </div>

        <h3 className="text-2xl font-bold">{movie.title || movie.name}</h3>

        <button
          className="
            mt-4
            w-full
            py-3
            rounded-xl
            bg-gradient-to-r
            from-purple-500
            to-pink-500
            font-medium
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-300
          "
          onClick={() => navigate(`/movie/${movie.id}`)}
        >
          Explore Movie
        </button>
      </div>
    </motion.div>
  );
};

export default MovieCard;
