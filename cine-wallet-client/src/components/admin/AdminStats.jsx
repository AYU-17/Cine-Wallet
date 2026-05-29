const stats = [
  { title: "Total Users", value: "12K" },
  { title: "Movies Listed", value: "320" },
  { title: "Bookings", value: "4.8K" },
];

const AdminStats = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">

      {stats.map((item, index) => (
        <div
          key={index}
          className="glass rounded-[30px] p-8"
        >

          <p className="text-gray-400">
            {item.title}
          </p>

          <h2 className="text-5xl font-bold mt-4">
            {item.value}
          </h2>

        </div>
      ))}

    </div>
  );
};

export default AdminStats;