import { motion } from "framer-motion";
import NeonButton from "../ui/NeonButton";

const UpcomingBanner = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="
          relative
          overflow-hidden
          rounded-[40px]
          min-h-[500px]
          flex
          items-center
        "
      >

        {/* Background */}
        <img
          src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1974&auto=format&fit=crop"
          alt="upcoming"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Glow */}
        <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-pink-500/20 blur-[120px]" />

        {/* Content */}
        <div className="relative z-10 p-10 md:p-16 max-w-2xl">

          <p className="uppercase tracking-[5px] text-pink-400 mb-4">
            Coming Soon
          </p>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            Avatar <span className="text-pink-500">Rebirth</span>
          </h2>

          <p className="text-gray-300 mt-6 text-lg leading-relaxed">
            Experience the next generation cinematic universe
            with immersive visuals and futuristic storytelling.
          </p>

          <div className="mt-8">
            <NeonButton title="Notify Me" />
          </div>

        </div>

      </motion.div>
    </section>
  );
};

export default UpcomingBanner;