// import { Search, Bell } from "lucide-react";
// import SearchBar from "../ui/SearchBar";

// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 px-8 py-4">
//       <div className="glass max-w-7xl mx-auto rounded-2xl px-6 py-4 flex items-center justify-between">

//         <div>
//           <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
//             Cine Wallet
//           </h1>
//         </div>

//         <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
//           <a href="#" className="hover:text-white transition">
//             Home
//           </a>

//           <a href="#" className="hover:text-white transition">
//             Movies
//           </a>

//           <a href="#" className="hover:text-white transition">
//             Trending
//           </a>

//           <a href="#" className="hover:text-white transition">
//             Watchlist
//           </a>
//         </div>

//         {/* <div className="hidden lg:block">
//             <SearchBar />
//         </div> */}

//         <div className="flex items-center gap-4">
//         <div className="hidden lg:block">
//             <SearchBar />
//         </div>

//           {/* <button className="p-2 rounded-full glass hover:scale-105 transition">
//             <Search size={18} />
//           </button> */}

//           <button className="p-2 rounded-full glass hover:scale-105 transition">
//             <Bell size={18} />
//           </button>

//           <img
//             src="https://i.pravatar.cc/40"
//             alt="profile"
//             className="w-10 h-10 rounded-full border border-purple-500"
//           />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { Search, Bell, Menu, X } from "lucide-react";
import { useState } from "react";
import SearchBar from "../ui/SearchBar";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4">

      <div className="glass max-w-7xl mx-auto rounded-2xl px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          Cine Wallet
        </h1>

        {/* Desktop Search */}
        <div className="hidden lg:block">
          <SearchBar />
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">

          <button className="p-2 rounded-full glass hover:scale-105 transition">
            <Search size={18} />
          </button>

          <button className="p-2 rounded-full glass hover:scale-105 transition">
            <Bell size={18} />
          </button>

          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-10 h-10 rounded-full border border-purple-500"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
            md:hidden
            glass
            mt-4
            rounded-2xl
            p-6
            max-w-7xl
            mx-auto
          "
        >
          <div className="flex flex-col gap-6 text-gray-300">

            <a href="#">Home</a>
            <a href="#">Movies</a>
            <a href="#">Trending</a>
            <a href="#">Watchlist</a>

            <SearchBar />

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;