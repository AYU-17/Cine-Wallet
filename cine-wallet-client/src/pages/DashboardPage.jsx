import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardStats from "../components/dashboard/DashboardStats";
import ContinueWatching from "../components/dashboard/ContinueWatching";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-[#060816] text-white flex">

      <DashboardSidebar />

      <div className="flex-1 p-8 lg:p-12">

        <h1 className="text-5xl font-bold mb-12">
          My Dashboard
        </h1>

        <DashboardStats />

        <ContinueWatching />

      </div>

    </div>
  );
};

export default DashboardPage;