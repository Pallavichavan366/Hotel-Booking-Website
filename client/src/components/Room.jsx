import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Rooms = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = searchParams.get("location");
  const guests = searchParams.get("guests");
  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");

  useEffect(() => {
    // ⛔ Don't call API until params exist
    if (!location || !checkIn || !checkOut) return;

    const fetchRooms = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/search", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            location,
            guests: Number(guests),
            checkIn,
            checkOut,
          }),
        });

        const data = await res.json();
        setRooms(data);
      } catch (err) {
        console.error("Failed to fetch rooms:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, [location, guests, checkIn, checkOut]);

  if (loading) return <p className="p-6">Loading rooms...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Available Rooms</h1>

      {rooms.length === 0 && <p>No rooms found</p>}

      <div className="flex flex-col gap-6">
        {rooms.map((room) => (
          <div
            key={room._id}
            className="border p-5 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold">{room.name}</h2>
            <p className="text-gray-600">{room.location}</p>
            <p className="mt-1">Guests: {room.maxGuests ?? "N/A"}</p>

            <div className="flex justify-between items-center mt-4">
              <p className="text-xl font-bold">₹{room.pricePerNight ?? "N/A"}</p>

              <button
                className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800"
                onClick={() => navigate(`/booking/${room._id}`)}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;    