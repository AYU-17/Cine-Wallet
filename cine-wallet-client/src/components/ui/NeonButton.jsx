const NeonButton = ({ title }) => {
  return (
    <button
      className="
        px-6 py-3
        rounded-xl
        bg-gradient-to-r
        from-purple-500
        to-pink-500
        font-semibold
        shadow-lg
        hover:scale-105
        hover:shadow-purple-500/50
        transition-all
        duration-300
      "
    >
      {title}
    </button>
  );
};

export default NeonButton;