import { Search } from "lucide-react";
import { useEffect, useState } from "react";

import useDebounce from "../../hooks/useDebounce";
import { searchMovies } from "../../services/tmdb";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const [results, setResults] = useState([]);

  const debouncedQuery = useDebounce(query);

  useEffect(() => {
    const getResults = async () => {

      if (!debouncedQuery) {
        setResults([]);
        return;
      }

      const data = await searchMovies(debouncedQuery);

      setResults(data.slice(0, 5));
    };

    getResults();
  }, [debouncedQuery]);

  return (
    <div className="relative">

      <div
        className="
          glass
          flex
          items-center
          gap-3
          px-5
          py-4
          rounded-2xl
          w-full
          md:w-[420px]
        "
      >
        <Search className="text-gray-400" size={20} />

        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="
            bg-transparent
            outline-none
            w-full
            text-white
            placeholder:text-gray-500
          "
        />
      </div>

      {/* Results */}
      {results.length > 0 && (

        <div
          className="
            absolute
            top-full
            mt-3
            w-full
            glass
            rounded-2xl
            overflow-hidden
            z-50
          "
        >

          {results.map((movie) => (

            <div
              key={movie.id}
              className="
                px-4
                py-3
                hover:bg-white/5
                transition
                cursor-pointer
              "
            >
              {movie.title}
            </div>

          ))}

        </div>
      )}

    </div>
  );
};

export default SearchBar;