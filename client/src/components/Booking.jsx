import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Booking = () => {
  const { hotelId } = useParams();
  const navigate = useNavigate();

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

  const calculateNights = () => {
    if (!formData.checkIn || !formData.checkOut) return 0;
    const start = new Date(formData.checkIn);
    const end = new Date(formData.checkOut);
    return (end - start) / (1000 * 60 * 60 * 24);
  };

  const totalPrice = calculateNights() * hotel.pricePerNight;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nights = calculateNights();
    if (nights <= 0) {
      alert("Check-out date must be after check-in date");
      return;
    }

    const bookingData = {
      hotelId: hotel._id,
      hotelName: hotel.name,
      price: totalPrice,
      fullName: formData.name, // ✅ matches schema
      mobile: formData.mobile,
      address: formData.address,
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      guests: formData.guests,
    };

    try {
      await axios.post("http://localhost:5000/api/bookings", bookingData);
      alert("Booking successful!");
      navigate("/my-bookings");
    } catch (err) {
      console.error(err);
      alert("Booking failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-24 flex justify-center p-4">
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
              ₹{hotel.pricePerNight}
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
              className="w-full border rounded-md px-3 py-2"
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
              className="w-full border rounded-md px-3 py-2"
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
              className="w-full border rounded-md px-3 py-2"
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
                className="w-full border rounded-md px-3 py-2"
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
                className="w-full border rounded-md px-3 py-2"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Guests</label>
            <input
              type="number"
              min="1"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>

          {/* Booking Summary */}
          {formData.checkIn && formData.checkOut && (
            <div className="p-4 bg-gray-50 border rounded">
              <h3 className="font-semibold mb-2">Booking Summary</h3>
              <p><b>Nights:</b> {calculateNights()}</p>
              <p><b>Guests:</b> {formData.guests}</p>
              <p className="font-bold">
                Total Price: ₹{totalPrice}
              </p>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700"
          >
            Book Now
          </button>

        </form>
      </div>
    </div>
  );
};

export default Booking;
