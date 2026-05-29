const genres = [
  "Action",
  "Sci-Fi",
  "Drama",
  "Adventure",
  "Fantasy",
  "Thriller",
  "Anime",
];

const GenreSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-10">

      <div className="flex flex-wrap gap-4">

        {genres.map((genre, index) => (
          <button
            key={index}
            className="
              px-6
              py-3
              rounded-full
              glass
              hover:bg-purple-500/20
              hover:border-purple-500/40
              transition-all
              duration-300
            "
          >
            {genre}
          </button>
        ))}

      </div>
    </section>
  );
};

export default GenreSection;