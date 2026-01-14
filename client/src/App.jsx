import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import About from "./components/About";
import PopularRooms from "./components/Package";
import Booking from "./components/Booking";
import Hero from "./components/Hero";
import Hotels from "./components/Hotels";
import Rooms from "./components/Room";
import ServicesSection from "./components/Service";
import TestimonialSection from "./components/Testimonials";
import MyBookings from "./components/MyBookings";
import Auth from "./components/Auth";

const App = () => {
  return (
    <>
      <Navbar />

      {/* 👇 THIS IS THE FIX */}
      <main className="pt-28">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <PopularRooms />
                <About />
                <Hotels />
                <ServicesSection />
                <TestimonialSection />
              </>
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/booking/:hotelId" element={<Booking />} />
          <Route path="/testimonials" element={<TestimonialSection />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/package" element={<PopularRooms />} />
<Route path="/services" element={<ServicesSection />} />
<Route path="/auth" element={<Auth />} />

        </Routes>
      </main>
    </>
  );
};

export default App;
