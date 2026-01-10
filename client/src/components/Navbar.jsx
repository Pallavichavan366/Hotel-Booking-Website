import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets.js";
import Sidebar from "./Sidebar.jsx";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-0 left-1 right-1 z-50
        h-20
        px-6 md:px-16
        flex items-center justify-between
        bg-white/90 backdrop-blur-md
        rounded-3xl
        shadow-xl
        border border-gray-100
      "
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <NavLink to="/">
          <img
            src={assets.logo}
            alt="RoyalStay Logo"
            className="w-22 h-20"
          />
        </NavLink>
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-black cursor-pointer ${
                isActive ? "text-black font-semibold" : ""
              }`
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/package" className="hover:text-black cursor-pointer">
            Package
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" className="hover:text-black cursor-pointer">
            About Us
          </NavLink>
        </li>

        <li>
          <NavLink to="/hotels" className="hover:text-black cursor-pointer">
            Hotels
          </NavLink>
        </li>

        <li>
          <NavLink to="/services" className="hover:text-black cursor-pointer">
            Services
          </NavLink>
        </li>

        <li>
          <NavLink to="/testimonials" className="hover:text-black cursor-pointer">
            Testimonials
          </NavLink>
        </li>
      </ul>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <button className="px-5 py-2 bg-black text-white rounded-full hover:bg-gray-900">
          Sign in
        </button>
      </div>

      {/* Hamburger */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden text-2xl"
      >
        ☰
      </button>

      <Sidebar isOpen={open} onClose={() => setOpen(false)} />
    </nav>
  );
};

export default Navbar;
