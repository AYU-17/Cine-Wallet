import { useMovieReviews }
from "../../hooks/useMovieReviews";

const ReviewsSection = ({
  movieId,
}) => {
  const {
    data: reviews = [],
  } = useMovieReviews(movieId);

  return (
    <section className="max-w-7xl mx-auto px-8 py-20">

      <h2 className="text-4xl font-bold mb-12">
        Reviews
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {reviews.slice(0, 6).map(
          (review) => (

            <div
              key={review.id}
              className="
                glass
                rounded-3xl
                p-8
              "
            >

              <div className="flex items-center justify-between">

                <h3 className="font-semibold text-xl">
                  {review.author}
                </h3>

                <span
                  className="
                    px-4
                    py-2
                    rounded-full
                    bg-purple-500/20
                    text-purple-400
                  "
                >
                  Verified Critic
                </span>

              </div>

              <p
                className="
                  text-gray-300
                  mt-6
                  line-clamp-6
                "
              >
                {review.content}
              </p>

            </div>
          )
        )}

      </div>

    </section>
  );
};

export default ReviewsSection;