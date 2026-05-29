import MainLayout from "../components/layout/MainLayout";
import DiscoverFilters from "../components/discover/DiscoverFilters";
import DiscoverGrid from "../components/discover/DiscoverGrid";
import Pagination from "../components/common/Pagination";
import InfiniteDiscoverGrid from "../components/discover/InfiniteDiscoverGrid";

const DiscoverPage = () => {
  return (
    <MainLayout>

      <section className="pt-36 pb-20 max-w-7xl mx-auto px-6">

        <div className="mb-12">

          <h1 className="text-6xl font-bold">
            Discover Movies
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            Explore thousands of movies with smart filters.
          </p>

        </div>

        <DiscoverFilters />

        <InfiniteDiscoverGrid />

        <Pagination />

      </section>

    </MainLayout>
  );
};

export default DiscoverPage;