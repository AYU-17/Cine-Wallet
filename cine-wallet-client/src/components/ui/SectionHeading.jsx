const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="flex items-end justify-between mb-8">

      <div>
        <h2 className="text-3xl md:text-4xl font-bold">
          {title}
        </h2>

        <p className="text-gray-400 mt-2">
          {subtitle}
        </p>
      </div>

      <button className="text-purple-400 hover:text-white transition">
        View All
      </button>

    </div>
  );
};

export default SectionHeading;