import movies from "../../data/movies";

const ContinueWatching = () => {
  return (
    <section>

      <h2 className="text-3xl font-bold mb-8">
        Continue Watching
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {movies.map((movie) => (
          <div
            key={movie.id}
            className="
              glass
              rounded-[30px]
              overflow-hidden
            "
          >

            <img
              src={movie.image}
              alt={movie.title}
              className="h-64 w-full object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold">
                {movie.title}
              </h3>

              <div className="w-full h-2 bg-white/10 rounded-full mt-5 overflow-hidden">

                <div className="w-[65%] h-full bg-gradient-to-r from-purple-500 to-pink-500" />

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default ContinueWatching;