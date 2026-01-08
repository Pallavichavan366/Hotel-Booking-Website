import { useEffect, useState } from "react";
import axios from "axios";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/bookings");
      setBookings(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const cancelBooking = async (bookingId) => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this booking?"
    );
    if (!confirmCancel) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/bookings/${bookingId}`
      );

      // Remove booking from UI
      setBookings((prev) =>
        prev.filter((b) => b._id !== bookingId)
      );
    } catch (err) {
      alert("Failed to cancel booking");
    }
  };

  if (loading) {
    return <p className="pt-24 text-center">Loading bookings...</p>;
  }

  if (bookings.length === 0) {
    return <p className="pt-24 text-center">No bookings found</p>;
  }

  return (
    <div className="min-h-screen pt-24 bg-gray-100 p-4">
      <h1 className="text-2xl font-semibold text-center mb-6">
        My Bookings
      </h1>

      <div className="max-w-5xl mx-auto space-y-4">
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="bg-white rounded shadow p-5 flex flex-col md:flex-row md:justify-between"
          >
            <div>
              <h2 className="text-lg font-medium">
                {booking.hotelName}
              </h2>

              <p className="text-sm text-gray-600">
                {new Date(booking.checkIn).toDateString()} →{" "}
                {new Date(booking.checkOut).toDateString()}
              </p>

              <p><b>Guests:</b> {booking.guests}</p>
              <p><b>Total Price:</b> ₹{booking.price}</p>
            </div>

            <button
              onClick={() => cancelBooking(booking._id)}
              className="mt-4 md:mt-0 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Cancel Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
