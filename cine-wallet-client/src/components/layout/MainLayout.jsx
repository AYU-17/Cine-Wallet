import Footer from "../common/Footer";
import Navbar from "../common/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#060816] text-white">
      <Navbar />
      {children}

      <Footer />
    </div>
  );
};

export default MainLayout;