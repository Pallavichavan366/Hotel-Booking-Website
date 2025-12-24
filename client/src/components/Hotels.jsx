
import { assets } from "../assets/assets";

const hotels = [
  {
    id: 1,
    name: "Royal Palace Hotel",
    location: "New York, USA",
    price: "$180 / night",
    image:
   assets.RoyalSpace
   ,
  },
  {
    id: 2,
    name: "Ocean View Resort",
    location: "Maldives",
    price: "$250 / night",
    image:
      assets.OceanResort,
  },
  {
    id: 3,
    name: "City Lights Hotel",
    location: "Paris, France",
    price: "$200 / night",
    image:
      assets.cityhotel,
  },
];
export default function Hotels() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14">
          Our Most Popular Hotels
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">
                  {hotel.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  {hotel.location}
                </p>

                <div className="flex items-center justify-between">
                  <span className="font-semibold text-lg">
                    {hotel.price}
                  </span>
                  <button className="px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
