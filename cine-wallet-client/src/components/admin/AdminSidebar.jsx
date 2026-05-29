import {
  LayoutDashboard,
  Film,
  Users,
  Ticket,
} from "lucide-react";

const AdminSidebar = () => {
  return (
    <aside
      className="
        hidden
        lg:flex
        flex-col
        w-[280px]
        border-r
        border-white/10
        p-8
      "
    >

      <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        Cine Admin
      </h2>

      <div className="space-y-4">

        <button className="glass w-full rounded-2xl px-5 py-4 flex items-center gap-4">
          <LayoutDashboard />
          Dashboard
        </button>

        <button className="w-full rounded-2xl px-5 py-4 flex items-center gap-4 hover:bg-white/5 transition">
          <Film />
          Movies
        </button>

        <button className="w-full rounded-2xl px-5 py-4 flex items-center gap-4 hover:bg-white/5 transition">
          <Users />
          Users
        </button>

        <button className="w-full rounded-2xl px-5 py-4 flex items-center gap-4 hover:bg-white/5 transition">
          <Ticket />
          Bookings
        </button>

      </div>

    </aside>
  );
};

export default AdminSidebar;