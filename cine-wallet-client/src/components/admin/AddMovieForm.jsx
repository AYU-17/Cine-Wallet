import { useState } from "react";

const AddMovieForm = () => {
  const [title, setTitle] = useState("");

  const [poster, setPoster] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();

    console.log(title, poster);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="
        glass
        rounded-3xl
        p-8
        max-w-3xl
      "
    >
      <h2 className="text-3xl font-bold mb-8">Add Movie</h2>

      <input
        type="text"
        placeholder="Movie Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="
          w-full
          p-4
          rounded-xl
          glass
          mb-5
        "
      />

      <input type="file" onChange={(e) => setPoster(e.target.files[0])} />

      <button
        type="submit"
        className="
          mt-6
          px-6
          py-3
          rounded-xl
          bg-gradient-to-r
          from-purple-500
          to-pink-500
        "
      >
        Upload Movie
      </button>
    </form>
  );
};

export default AddMovieForm;
