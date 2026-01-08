import express from "express";
import mongoose from "mongoose";
import Booking from "../models/Booking.js";
import Hotel from "../models/Hotel.js";

const router = express.Router();

// ✅ CREATE BOOKING
router.post("/", async (req, res) => {
  try {
    const {
      hotelId,
      fullName,
      mobile,
      address,
      checkIn,
      checkOut,
      guests,
    } = req.body;

    // Validate hotelId
    if (!mongoose.Types.ObjectId.isValid(hotelId)) {
      return res.status(400).json({ message: "Invalid hotel ID" });
    }

    // Find hotel
    const hotel = await Hotel.findById(hotelId);
    if (!hotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }

    // Calculate number of days
    const days =
      (new Date(checkOut) - new Date(checkIn)) /
      (1000 * 60 * 60 * 24);

    if (days <= 0) {
      return res.status(400).json({ message: "Invalid dates" });
    }

    const totalPrice = days * hotel.pricePerNight;

    const booking = new Booking({
      hotelId: new mongoose.Types.ObjectId(hotelId), // ✅ FIX
      hotelName: hotel.name,
      fullName,
      mobile,
      address,
      checkIn,
      checkOut,
      guests,
      price: totalPrice,
    });

    const savedBooking = await booking.save();
    console.log("✅ Booking saved:", savedBooking._id);

    res.status(201).json(savedBooking);
  } catch (err) {
    console.error("❌ Booking error:", err);
    res.status(500).json({ message: "Failed to create booking" });
  }
});

// ✅ GET ALL BOOKINGS
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch bookings" });
  }
});

// ✅ DELETE BOOKING (Cancel Order)
router.delete("/:id", async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Booking cancelled" });
  } catch (err) {
    res.status(500).json({ message: "Failed to cancel booking" });
  }
});

export default router;
