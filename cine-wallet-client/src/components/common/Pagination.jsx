import { useDiscoverStore } from "../../store/discoverStore";

const Pagination = () => {
  const { page, setPage } =
    useDiscoverStore();

  return (
    <div className="flex justify-center gap-4 mt-16">

      <button
        onClick={() =>
          page > 1 && setPage(page - 1)
        }
        className="glass px-5 py-3 rounded-xl"
      >
        Prev
      </button>

      <span className="glass px-5 py-3 rounded-xl">
        {page}
      </span>

      <button
        onClick={() =>
          setPage(page + 1)
        }
        className="glass px-5 py-3 rounded-xl"
      >
        Next
      </button>

    </div>
  );
};

export default Pagination;