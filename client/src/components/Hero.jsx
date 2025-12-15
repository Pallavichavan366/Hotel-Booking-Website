import React from 'react'
import { assets } from '../assets/assets'
import roomImg1 from "../assets/roomImg1.png";


const Hero = () => {
  return (
    <section  className="  w-full py-16 px-6 md:px-16 lg:px-24 xl:px-32">
            <div className="
  relative
  bg-white shadow-xl rounded-3xl
  pt-10 px-10 pb-24
  grid md:grid-cols-2 gap-12
">
              <div className="flex flex-col gap-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
  Discover Comfort. <br />
  Experience <span className="text-blue-500">Personalized</span> Stays <br />
  with RoyalStay.
</h1>
 
<p className="text-gray-600 text-lg">
  Enjoy a stay crafted around your comfort, with services designed to make every moment memorable and effortless.
</p>

 

  
 </div>
              <div className="grid grid-cols-2 gap-4 " >
                 <div className="col-span-1 h-full">
                 <img
    src={assets.roomImg1}
    alt="hotel"
    className="rounded-2xl  w-full object-left h-full  object-cover shadow-lg hover:scale-105 transition-all duration-300

"/>
  </div>
  <div className="flex flex-col gap-4 h-full">
    <img
      src={assets.roomImg2}
      alt=""
      className="rounded-xl w-full h-[50%] object-cover shadow-lg hover:scale-105 transition-all duration-300"
    />
    <img
      src={assets.roomImg3}
      alt=""
      className="rounded-xl w-full h-[50%] object-cover shadow-lg hover:scale-105 transition-all duration-300"
    />

              </div>
              </div>
           
<div className="flex gap-4">
            <span className="font-medium">Follow Us</span>
            <div className="flex gap-4">
              <i className="ri-facebook-fill text-xl">
                <img src={assets.facebookIcon}alt="" />
              </i>
              <i className="ri-instagram-line text-xl">
                <img src={assets.instagramIcon} alt="" />
              </i>
              <i className="ri-twitter-x-line text-xl">
                <img src={assets.twitterIcon} alt="" />
              </i>
                 {/* Search Form */}
         
<div
  className="
    absolute left-1/2 -translate-x-1/2
    -bottom-10
    w-[92%] max-w-5xl
    bg-white shadow-xl rounded-2xl
    px-4 py-4 md:px-6
    flex flex-wrap md:flex-nowrap
    items-center gap-6
    z-50
  "
>
    {/* Location */}
    <div className="flex flex-col">
      <label className="text-sm font-semibold text-gray-700">Location</label>
      <input
        type="text"
        placeholder="Where are you going?"
        className="text-gray-500 text-sm outline-none"
      />
    </div>
    
     <div className="flex flex-col">
      <label className="text-sm font-semibold text-gray-700">Check-in</label>
      <input
        type="date"
        className="text-gray-500 text-sm outline-none"
      />
    </div> 
     <div className="flex flex-col">
      <label className="text-sm font-semibold text-gray-700">Check-out</label>
      <input
        type="date"
        className="text-gray-500 text-sm outline-none"
      />
      

    </div>{/* Guests */}
    <div className="flex flex-col">
      <label className="text-sm font-semibold text-gray-700">Guests</label>
      <input
        type="number"
        placeholder="Number of guests"
        className="text-gray-500 text-sm outline-none"
      />
    </div>

    {/* Blue Button */}
    <button className="
      bg-blue-600 text-white p-3 rounded-full 
      hover:bg-blue-700 ml-4
    ">
      ➜
    </button>
  </div>
</div>


            </div>
            
 
           </div> 

           
    </section>
  )
}

export default Hero
