import {
  Home,
  Bookmark,
  Ticket,
  User,
} from "lucide-react";

const DashboardSidebar = () => {
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
        Cine Wallet
      </h2>

      <div className="space-y-4">

        <button className="glass w-full rounded-2xl px-5 py-4 flex items-center gap-4">
          <Home />
          Dashboard
        </button>

        <button className="w-full rounded-2xl px-5 py-4 flex items-center gap-4 hover:bg-white/5 transition">
          <Bookmark />
          Watchlist
        </button>

        <button className="w-full rounded-2xl px-5 py-4 flex items-center gap-4 hover:bg-white/5 transition">
          <Ticket />
          Bookings
        </button>

        <button className="w-full rounded-2xl px-5 py-4 flex items-center gap-4 hover:bg-white/5 transition">
          <User />
          Profile
        </button>

      </div>

    </aside>
  );
};

export default DashboardSidebar;