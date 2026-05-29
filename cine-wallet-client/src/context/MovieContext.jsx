import { createContext, useContext, useState } from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);

  const toggleWatchlist = (movie) => {
        const exists = watchlist.find(
            (item) => item.id === movie.id
        );

        if (exists) {

            setWatchlist(
            watchlist.filter((item) => item.id !== movie.id)
            );

            toast.error("Removed from Watchlist");

        } else {

            setWatchlist([...watchlist, movie]);

            toast.success("Added to Watchlist");
        }
    };

  return (
    <MovieContext.Provider
      value={{
        watchlist,
        toggleWatchlist,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovie = () => useContext(MovieContext);