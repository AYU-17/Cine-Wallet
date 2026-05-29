import { Play } from "lucide-react";
import { motion } from "framer-motion";
import NeonButton from "../ui/NeonButton";

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop"
        alt="movie"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Gradient Glow */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-10 right-20 w-72 h-72 bg-pink-500/20 blur-[120px] rounded-full floating" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl"
        >
          <p className="uppercase tracking-[6px] text-purple-400 mb-4">
            Trending Now
          </p>

          <h1 className="text-6xl md:text-8xl font-bold leading-tight">
            Dune <span className="text-purple-500">Part II</span>
          </h1>

          <p className="text-gray-300 mt-6 text-lg leading-relaxed">
            Explore ratings, reviews, trailers, and book tickets in a futuristic
            cinematic experience.
            <div className="flex items-center gap-6 mt-6 text-sm text-gray-300">
              <span className="glass px-4 py-2 rounded-full">
                ⭐ 8.9 Rating
              </span>

              <span className="glass px-4 py-2 rounded-full">Sci-Fi</span>

              <span className="glass px-4 py-2 rounded-full">2026</span>
            </div>
          </p>

          <div className="flex items-center gap-4 mt-8">
            <NeonButton title="Book Tickets" />

            <button className="glass px-6 py-3 rounded-xl flex items-center gap-2 hover:scale-105 transition">
              <Play size={18} />
              Watch Trailer
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
