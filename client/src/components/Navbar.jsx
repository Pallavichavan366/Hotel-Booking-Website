import React , {useState} from "react";
import { assets } from '../assets/assets.js'; 
import Sidebar from "./Sidebar.jsx";


const Navbar = () => {
 const [open, setOpen] = useState(false);

  return (
    <nav className="w-full py-6 px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between h-20 ">
      
      {/* Logo */}
      <div className="flex items-center gap-2 ">
        <img
          src={assets.logo}
          alt="RoyalStay Logo"
          className="w-22 h-22"
        />
       
      </div>
    

      {/* Nav Links */}
      <ul className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
        <li className="hover:text-black cursor-pointer">Home</li>
        <li className="hover:text-black cursor-pointer">Package</li>
        <li className="hover:text-black cursor-pointer">Hotels</li>
        <li className="hover:text-black cursor-pointer">Services</li>
        <li className="hover:text-black cursor-pointer">About us</li>
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
      
   
  );}
  export default Navbar