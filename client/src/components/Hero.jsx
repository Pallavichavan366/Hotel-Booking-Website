import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { assets } from "../assets/assets";

const Hero = () => {

  const navigate = useNavigate(); // ✅ ADD THIS LINE
  const [formData, setFormData] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit search
  const handleSearch = async () => {
    if (!formData.location || !formData.checkIn || !formData.checkOut) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Available rooms:", data);

       // Navigate to rooms page with query params
    navigate(
      `/rooms?location=${formData.location}&guests=${formData.guests}&checkIn=${formData.checkIn}&checkOut=${formData.checkOut}`
    );

      // later → navigate("/rooms", { state: data })
    } catch (error) {
      console.error("Search failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-16 px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="relative bg-white shadow-xl rounded-3xl pt-10 px-10 pb-24 grid md:grid-cols-2 gap-12">
        
        {/* LEFT */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Discover Comfort. <br />
            Experience <span className="text-blue-500">Personalized</span> Stays <br />
            with RoyalStay.
          </h1>

          <p className="text-gray-600 text-lg">
            Enjoy a stay crafted around your comfort, with services designed to make every moment memorable.
          </p>
        </div>

        {/* RIGHT IMAGES */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src={assets.roomImg1}
            alt="hotel"
            className="rounded-2xl w-full h-full object-cover shadow-lg hover:scale-105 transition-all"
          />
          <div className="flex flex-col gap-4">
            <img src={assets.roomImg2} className="rounded-xl h-1/2 object-cover shadow-lg" />
            <img src={assets.roomImg3} className="rounded-xl h-1/2 object-cover shadow-lg" />
          </div>
        </div>

        {/* SEARCH FORM */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 w-[92%] max-w-5xl bg-white shadow-xl rounded-2xl px-4 py-4 md:px-6 flex flex-wrap md:flex-nowrap items-center gap-6 z-50">
          
          {/* Location */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Location</label>
            <input
              type="text"
              name="location"
              placeholder="Where are you going?"
              value={formData.location}
              onChange={handleChange}
              className="text-gray-500 text-sm outline-none"
            />
          </div>

          {/* Check-in */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Check-in</label>
            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              className="text-gray-500 text-sm outline-none"
            />
          </div>

          {/* Check-out */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Check-out</label>
            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              className="text-gray-500 text-sm outline-none"
            />
          </div>

          {/* Guests */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Guests</label>
            <input
              type="number"
              name="guests"
              min="1"
              value={formData.guests}
              onChange={handleChange}
              className="text-gray-500 text-sm outline-none"
            />
          </div>

          {/* Button */}
          <button
            onClick={handleSearch}
            disabled={loading}
            className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 ml-4"
          >
            {loading ? "..." : "➜"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
