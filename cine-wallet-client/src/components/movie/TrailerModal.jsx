import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TrailerModal = ({ open, setOpen, videoKey }) => {
  return (
    <AnimatePresence>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed
            inset-0
            bg-black/80
            z-[100]
            flex
            items-center
            justify-center
            p-4
          "
        >

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="
              relative
              w-full
              max-w-5xl
              rounded-3xl
              overflow-hidden
              glass
            "
          >

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="
                absolute
                top-4
                right-4
                z-20
                p-3
                rounded-full
                glass
              "
            >
              <X />
            </button>

            {/* Trailer */}
            <iframe
              className="w-full aspect-video"
              src={`https://www.youtube.com/embed/${videoKey}`}
              title="Trailer"
              allowFullScreen
            />

          </motion.div>

        </motion.div>
      )}

    </AnimatePresence>
  );
};

export default TrailerModal;