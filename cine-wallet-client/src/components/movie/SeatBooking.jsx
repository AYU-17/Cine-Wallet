import { useState } from "react";
import { verifyPayment } from "../../services/paymentService";
import toast from "react-hot-toast";
import loadRazorpay from "../../utils/loadRazorpay";

const rows = 6;
const cols = 8;

const SeatBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seatId) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((seat) => seat !== seatId)
        : [...prev, seatId],
    );
  };

  const handlePayment = async () => {
    const loaded = await loadRazorpay();

    if (!loaded) {
      toast.error("Failed to load Razorpay");
      return;
    }

    const token = localStorage.getItem("token");

    const totalAmount = selectedSeats.length * 250;
    const order = await createOrder(totalAmount, token);

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY,

      amount: order.amount,

      currency: order.currency,

      order_id: order.id,

      name: "Cine Wallet",

      description: "Movie Ticket Booking",

      handler: async (response) => {
        await verifyPayment(response);

        toast.success("Payment Successful");
      },
    };

    const payment = new window.Razorpay(options);

    payment.open();
  };

  return (
    <section className="min-h-screen pt-36 px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Seat Layout */}
        <div className="lg:col-span-2">
          <h1 className="text-5xl font-bold mb-12">Select Your Seats</h1>

          {/* Screen */}
          <div
            className="
              w-full
              h-6
              bg-gradient-to-r
              from-purple-500
              to-pink-500
              rounded-full
              blur-[1px]
              mb-16
            "
          />

          <div className="flex items-center gap-8 mb-10 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded bg-white/10" />
              <span className="text-gray-400">Available</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded bg-gradient-to-r from-purple-500 to-pink-500" />
              <span className="text-gray-400">Selected</span>
            </div>
          </div>

          {/* Seats */}
          <div className="space-y-5">
            {[...Array(rows)].map((_, rowIndex) => (
              <div key={rowIndex} className="flex justify-center gap-4">
                {[...Array(cols)].map((_, colIndex) => {
                  const seatId = `${rowIndex}-${colIndex}`;

                  const selected = selectedSeats.includes(seatId);

                  return (
                    <button
                      key={seatId}
                      onClick={() => toggleSeat(seatId)}
                      className={`
                        w-12
                        h-12
                        rounded-xl
                        transition-all
                        duration-300
                        ${
                          selected
                            ? "bg-gradient-to-r from-purple-500 to-pink-500 scale-110"
                            : "glass hover:bg-white/10"
                        }
                      `}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Booking Summary */}
        <div
          className="
            glass
            rounded-[30px]
            p-8
            h-fit
            sticky
            top-32
          "
        >
          <h2 className="text-3xl font-bold mb-8">Booking Summary</h2>

          <div className="space-y-5">
            <div className="flex justify-between text-gray-300">
              <span>Movie</span>
              <span>Dune Part II</span>
            </div>

            <div className="flex justify-between text-gray-300">
              <span>Seats</span>
              <span>{selectedSeats.length}</span>
            </div>

            <div className="flex justify-between text-gray-300">
              <span>Price</span>
              <span>₹ {selectedSeats.length * 250}</span>
            </div>
          </div>

          <button
            className="
              mt-10
              w-full
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-purple-500
              to-pink-500
              font-semibold
              hover:scale-105
              transition
            "
            onClick={handlePayment}
          >
            Continue Payment
          </button>
        </div>
      </div>
    </section>
  );
};

export default SeatBooking;
