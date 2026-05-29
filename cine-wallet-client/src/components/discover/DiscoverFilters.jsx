import { useEffect, useState } from "react";
import { fetchGenres } from "../../services/tmdb";
import { useDiscoverStore } from "../../store/discoverStore";

const DiscoverFilters = () => {
  const [genres, setGenres] = useState([]);

  const {
    genre,
    sortBy,
    setGenre,
    setSortBy,
  } = useDiscoverStore();

  useEffect(() => {
    const loadGenres = async () => {
      const data = await fetchGenres();
      setGenres(data);
    };

    loadGenres();
  }, []);

  return (
    <div className="glass rounded-[30px] p-6 mb-12">

      <div className="grid md:grid-cols-2 gap-4">

        <select
          value={genre}
          onChange={(e) =>
            setGenre(e.target.value)
          }
          className="glass p-4 rounded-xl text-white bg-white/10 border border-white/10 outline-none focus:ring-2 focus:ring-purple-400/50"
        >
          <option value="">
            All Genres
          </option>

          {genres.map((genre) => (
            <option
              key={genre.id}
              value={genre.id}
            >
              {genre.name}
            </option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value)
          }
          className="glass p-4 rounded-xl text-white bg-white/10 border border-white/10 outline-none focus:ring-2 focus:ring-purple-400/50"
        >
          <option value="popularity.desc">
            Popularity
          </option>

          <option value="vote_average.desc">
            Rating
          </option>

          <option value="release_date.desc">
            Newest
          </option>
        </select>

      </div>

    </div>
  );
};

export default DiscoverFilters;