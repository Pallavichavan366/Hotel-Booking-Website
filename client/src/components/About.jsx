import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            About 
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Welcome to <span className="font-semibold text-gray-800">RoyalStay</span>,
            your trusted hotel booking platform designed to make travel simple,
            fast, and stress-free.
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed">
            We connect travelers with verified hotels, resorts, and homestays
            across various destinations. Our platform offers transparent pricing,
            real guest reviews, and secure booking options.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Our dedicated support team works closely with hotel partners to ensure
            comfort, reliability, and a welcoming experience at every stay.
          </p>

          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
           Learn More
          </button>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src={assets.welcome}
            alt="Hotel staff welcoming guests"
            className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
          />
        </div>

      </div>
    </section>
  );
};
export default About
