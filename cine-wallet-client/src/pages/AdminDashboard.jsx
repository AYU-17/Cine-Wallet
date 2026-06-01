import { useNavigate } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminStats from "../components/admin/AdminStats";
import MovieTable from "../components/admin/MovieTable";

const AdminDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#060816] text-white flex">
      <AdminSidebar />

      <div className="flex-1 p-8 lg:p-12">
        <h1 className="text-5xl font-bold mb-12">Admin Dashboard</h1>

        <button
          onClick={() => navigate("/admin/add-movie")}
          className="
            mb-8
            px-6
            py-3
            rounded-xl
            bg-gradient-to-r
            from-purple-500
            to-pink-500
          "
        >
          Add Movie
        </button>

        <AdminStats />

        <MovieTable />
      </div>
    </div>
  );
};

export default AdminDashboard;
