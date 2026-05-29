import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import MovieBanner from "../components/movie/MovieBanner";
import CastSection from "../components/movie/CastSection";
import ReviewsSection from "../components/movie/ReviewsSection";
import RecommendationSection from "../components/movie/RecommendationSection";
import Loader from "../components/ui/Loader";

import { fetchMovieDetails } from "../services/tmdb";
import RatingAnalytics from "../components/movie/RatingAnalytics";

const MovieDetailsPage = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  const [loading, setLoading] = useState(true);

  const getMovie = async () => {
    const data = await fetchMovieDetails(id);

    setMovie(data);

    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  if (loading) return <Loader />;

  return (
    <MainLayout>

      <MovieBanner movie={movie} />

      <CastSection movieId={id} />

      <ReviewsSection movieId={id} />

      <div className="max-w-7xl mx-auto px-8 mt-12">
        <RatingAnalytics movie={movie} />
      </div>

      <RecommendationSection />

    </MainLayout>
  );
};

export default MovieDetailsPage;