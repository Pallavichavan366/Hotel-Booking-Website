import React from "react";
import { assets } from "../assets/assets";


const rooms = [
  {
    id: 1,
    image:
     assets.roomImg5,
    title: "Elite 250 sq ft Resort Home (1 BHK)",
    location: "Westminster Bridge Road, Lambeth, London, UK",
    rating: "4.8",
    reviews: "12 Ratings",
    price: "$1240",
    oldPrice: "$1600",
    discount: "35% off",
  },
  {
    id: 2,
    image:
     assets.roomImg6,
    title: "Luxury Boutique King Suite",
    location: "Westminster Bridge Road, Lambeth, London, UK",
    rating: "4.6",
    reviews: "10 Ratings",
    price: "$1240",
    oldPrice: "$1600",
    discount: "35% off",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457",
    title: "Premium Garden View Resort Room",
    location: "Westminster Bridge Road, Lambeth, London, UK",
    rating: "4.9",
    reviews: "15 Ratings",
    price: "$1240",
    oldPrice: "$1600",
    discount: "35% off",
  },
];

const PopularRooms = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-14 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-10">
        Our Most Popular Room
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
          >
            {/* Image */}
            <img
              src={room.image}
              alt={room.title}
              className="w-full h-56 object-cover"
            />

            {/* Content */}
            <div className="p-5">
              {/* Rating */}
              <div className="flex items-center gap-2 text-sm mb-2">
                <span className="bg-green-500 text-white px-2 py-0.5 rounded-md">
                  ⭐ {room.rating}
                </span>
                <span className="text-gray-500">
                  ({room.reviews})
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {room.title}
              </h3>

              {/* Location */}
              <p className="text-sm text-gray-500 mb-4">
                {room.location}
              </p>

              {/* Price */}
              <div className="flex items-center gap-3">
                <span className="text-xl font-bold text-gray-900">
                  {room.price}
                </span>
                <span className="line-through text-gray-400">
                  {room.oldPrice}
                </span>
                <span className="text-orange-500 font-medium">
                  {room.discount}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularRooms;


