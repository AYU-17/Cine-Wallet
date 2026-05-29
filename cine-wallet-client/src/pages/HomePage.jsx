import MainLayout from "../components/layout/MainLayout";
import GenreSection from "../components/movie/GenreSection";
import HeroSection from "../components/movie/HeroSection";
import TopRatedSection from "../components/movie/TopRatedSection";
import TrendingSection from "../components/movie/TrendingSection";
import UpcomingBanner from "../components/movie/UpcomingBanner";

const HomePage = () => {
  return (
    <MainLayout>
      <HeroSection />
      <GenreSection />
      <TrendingSection />
      <TopRatedSection />
      <UpcomingBanner />
    </MainLayout>
  );
};

export default HomePage;