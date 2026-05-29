import movies from "../../data/movies";

const MovieTable = () => {
  return (
    <div className="glass rounded-[30px] overflow-hidden">

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-white/5">

            <tr className="text-left">

              <th className="p-6">Movie</th>
              <th className="p-6">Rating</th>
              <th className="p-6">Status</th>
              <th className="p-6">Actions</th>

            </tr>

          </thead>

          <tbody>

            {movies.map((movie) => (
              <tr
                key={movie.id}
                className="border-t border-white/10"
              >

                <td className="p-6 flex items-center gap-4">

                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-16 h-20 object-cover rounded-xl"
                  />

                  <span>{movie.title}</span>

                </td>

                <td className="p-6">
                  ⭐ {movie.rating}
                </td>

                <td className="p-6">
                  <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-400">
                    Active
                  </span>
                </td>

                <td className="p-6">
                  <button className="text-purple-400 hover:text-white transition">
                    Edit
                  </button>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default MovieTable;