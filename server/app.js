import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import searchRoutes from "./routes/search.js";
import hotelRoutes from "./routes/hotels.js";
import bookingRoutes from "./routes/bookings.js";

dotenv.config();

const app = express();

// Logging middleware (TOP)
app.use((req, res, next) => {
  console.log("➡️", req.method, req.url);
  next();
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/hotels", hotelRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api", searchRoutes);

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("🔥 Error:", err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// Env check
if (!process.env.MONGO_URI) {
  throw new Error("❌ MONGO_URI is not defined in .env");
}

const PORT = process.env.PORT || 5000;

// Start server
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server", error);
    process.exit(1);
  }
};

startServer();
