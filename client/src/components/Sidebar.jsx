import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-white z-50 shadow-xl
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-white p-5 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={onClose} className="text-2xl">✕</button>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-4 p-6 text-gray-700">
          <NavLink to="/" onClick={onClose} className="hover:text-blue-600">
            Home
          </NavLink>

          <NavLink to="/package" onClick={onClose} className="hover:text-blue-600">
            Packages
          </NavLink>

          <NavLink to="/about" onClick={onClose} className="hover:text-blue-600">
            About
          </NavLink>

          <NavLink to="/hotels" onClick={onClose} className="hover:text-blue-600">
            Hotels
          </NavLink>

          <NavLink
            to="/testimonials"
            onClick={onClose}
            className="hover:text-blue-600"
          >
            Testimonials
          </NavLink>

          <button className="mt-6 bg-blue-600 text-white py-2 rounded-lg">
            Login
          </button>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
