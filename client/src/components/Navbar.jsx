import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets.js";
import Sidebar from "./Sidebar.jsx";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `cursor-pointer transition-colors duration-200 ${
      isActive ? "text-black font-semibold" : "text-gray-700 hover:text-black"
    }`;

  return (
    <>
    <nav
      className="
        fixed top-0 left-0 right-0 md:left-0 md:right-0 z-50
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
      <NavLink to="/" className="flex items-center">
        <img
          src={assets.logo}
          alt="RoyalStay Logo"
          className="w-24 h-20 object-contain"
        />
      </NavLink>

      {/* Nav Links */}
      <ul className="hidden md:flex items-center gap-10 font-medium">
        <li>
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/package" className={navLinkClass}>
            Package
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" className={navLinkClass}>
            About Us
          </NavLink>
        </li>

        <li>
          <NavLink to="/hotels" className={navLinkClass}>
            Hotels
          </NavLink>
        </li>

        <li>
          <NavLink to="/services" className={navLinkClass}>
            Services
          </NavLink>
        </li>

        <li>
          <NavLink to="/testimonials" className={navLinkClass}>
            Testimonials
          </NavLink>
        </li>
      </ul>

      {/* Desktop Button */}
      <div className="hidden md:flex items-center gap-4">
        <NavLink
  to="/auth"
  className="px-5 py-2 bg-black text-white rounded-full hover:bg-gray-900 transition"
>
  Sign in
</NavLink>
      </div>

      {/* Hamburger (Mobile) */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden text-2xl"
        aria-label="Open menu"
      >
        ☰
      </button>

      {/* Sidebar */}
    
    </nav>
    <Sidebar isOpen={open} onClose={() => setOpen(false)} />
    
     </> 
  );
};

export default Navbar;
