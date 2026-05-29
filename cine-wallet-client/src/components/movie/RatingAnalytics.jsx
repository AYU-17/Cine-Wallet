const RatingAnalytics = ({
  movie,
}) => {
  return (
    <div
      className="
        glass
        rounded-[30px]
        p-8
      "
    >

      <h3 className="text-2xl font-bold">
        Rating Analytics
      </h3>

      <div className="mt-8">

        <div className="flex justify-between mb-3">

          <span>TMDB Rating</span>

          <span>
            {movie.vote_average?.toFixed(1)}
          </span>

        </div>

        <div
          className="
            h-3
            rounded-full
            bg-white/10
            overflow-hidden
          "
        >

          <div
            style={{
              width: `${
                movie.vote_average * 10
              }%`,
            }}
            className="
              h-full
              bg-gradient-to-r
              from-purple-500
              to-pink-500
            "
          />

        </div>

      </div>

    </div>
  );
};

export default RatingAnalytics;