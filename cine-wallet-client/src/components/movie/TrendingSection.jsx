// import { useEffect, useState } from "react";
// import MovieCard from "./MovieCard";
// import SectionHeading from "../ui/SectionHeading";
// import Loader from "../ui/Loader";
// import { fetchTrendingMovies } from "../../services/tmdb";

// const TrendingSection = () => {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const getMovies = async () => {
//     const data = await fetchTrendingMovies();

//     setMovies(data);

//     setLoading(false);
//   };

//   useEffect(() => {
//     getMovies();
//   }, []);

//   return (
//     <section className="max-w-7xl mx-auto px-8 py-20">

//       <SectionHeading
//         title="Trending Movies"
//         subtitle="Discover the hottest movies dominating the charts."
//       />

//       {loading ? (

//         <Loader />

//       ) : (

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

//           {movies.map((movie) => (
//             <MovieCard key={movie.id} movie={movie} />
//           ))}

//         </div>

//       )}

//     </section>
//   );
// };

// export default TrendingSection;

import { useTrendingMovies } from "../../hooks/useTrendingMovies";
import Loader from "../ui/Loader";
import SectionHeading from "../ui/SectionHeading";
import MovieCard from "./MovieCard";

const TrendingSection = () => {
  const {
    data: movies,
    isLoading,
  } = useTrendingMovies();

  if (isLoading) return <Loader />;

  return (
    <section className="max-w-7xl mx-auto px-8 py-20">

      <SectionHeading
        title="Trending Movies"
        subtitle="Discover the hottest movies dominating the charts."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}

      </div>

    </section>
  );
};

export default TrendingSection