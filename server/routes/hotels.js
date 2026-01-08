import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();

// CREATE a new hotel
router.post("/", async (req, res) => {
  try {
    const newHotel = new Hotel(req.body);
    const savedHotel = await newHotel.save();
    res.status(201).json(savedHotel);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create hotel" });
  }
});

// GET all hotels
router.get("/", async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch hotels" });
  }
});

// GET hotel by ID
router.get("/:id", async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) return res.status(404).json({ message: "Hotel not found" });
    res.status(200).json(hotel);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch hotel" });
  }
});

// UPDATE hotel by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedHotel) return res.status(404).json({ message: "Hotel not found" });
    res.status(200).json(updatedHotel);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update hotel" });
  }
});

// DELETE hotel by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);
    if (!deletedHotel) return res.status(404).json({ message: "Hotel not found" });
    res.status(200).json({ message: "Hotel deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to delete hotel" });
  }
});

export default router;
