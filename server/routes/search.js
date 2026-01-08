import express from "express";
import Hotel from "../models/Hotel.js"; // make sure path is correct

const router = express.Router(); // ← This was missing

router.post("/search", async (req, res) => {
  const { location, guests, checkIn, checkOut } = req.body;

  if (!location || !guests || !checkIn || !checkOut) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const guestCount = Number(guests);
  if (Number.isNaN(guestCount) || guestCount <= 0) {
    return res.status(400).json({ message: "Invalid guests value" });
  }

  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);

  if (isNaN(checkInDate) || isNaN(checkOutDate)) {
    return res.status(400).json({ message: "Invalid date format" });
  }

  if (checkInDate >= checkOutDate) {
    return res.status(400).json({ message: "Invalid date range" });
  }

  const escapedLocation = location.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  try {
    const hotels = await Hotel.find({
      location: new RegExp(escapedLocation, "i"),
      maxGuests: { $gte: guestCount },
      availableFrom: { $lte: checkInDate },
      availableTo: { $gte: checkOutDate },
    }).limit(50);

    res.json(hotels);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Search failed" });
  }
});

export default router; // ← export the router, not "search"
