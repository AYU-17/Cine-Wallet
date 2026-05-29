import AdminSidebar from "../components/admin/AdminSidebar";
import AdminStats from "../components/admin/AdminStats";
import MovieTable from "../components/admin/MovieTable";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-[#060816] text-white flex">

      <AdminSidebar />

      <div className="flex-1 p-8 lg:p-12">

        <h1 className="text-5xl font-bold mb-12">
          Admin Dashboard
        </h1>

        <AdminStats />

        <MovieTable />

      </div>

    </div>
  );
};

export default AdminDashboard;