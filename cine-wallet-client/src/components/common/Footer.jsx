const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-20">

      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Cine Wallet
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Premium cinematic movie ecosystem for reviews,
              ratings, trailers, and ticket booking.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Explore</h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <a href="#">Movies</a>
              <a href="#">Trending</a>
              <a href="#">Reviews</a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Cookies</a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-gray-500 text-sm">
          © 2026 Cine Wallet. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;