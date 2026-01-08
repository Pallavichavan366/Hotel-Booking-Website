import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Booking = () => {
  const { hotelId } = useParams();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/hotels/${hotelId}`
        );
        setHotel(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchHotel();
  }, [hotelId]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!hotel) return <p className="text-center mt-10">Hotel not found</p>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingData = {
      ...formData,
      hotelId,
      hotelName: hotel.name,
      price: hotel.price,
    };

    console.log("Booking Data:", bookingData);
    alert("Booking submitted! Check console for data.");
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-24 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">

        {/* Hotel Info */}
        <div className="border-b pb-4 mb-6">
          <h1 className="text-2xl font-semibold">{hotel.name}</h1>
          <p className="text-gray-600">
            {hotel.city}, {hotel.country}
          </p>
          <p className="mt-2 font-medium text-lg">
  Price per night:{" "}
  <span className="text-blue-600">
    ₹{hotel.price || hotel.pricePerNight || hotel.price_per_night || "N/A"}
  </span>
</p>

        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Check-in</label>
              <input
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Check-out</label>
              <input
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Guests</label>
            <input
              type="number"
              name="guests"
              min="1"
              value={formData.guests}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
