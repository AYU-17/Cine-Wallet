const SkeletonCard = () => {
  return (
    <div
      className="
        animate-pulse
        rounded-3xl
        overflow-hidden
        bg-[#111827]
        h-[420px]
      "
    >
      <div className="h-full w-full bg-gradient-to-b from-gray-800 to-gray-900" />
    </div>
  );
};

export default SkeletonCard;