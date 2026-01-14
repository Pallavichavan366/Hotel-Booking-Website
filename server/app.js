import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import searchRoutes from "./routes/search.js";
import hotelRoutes from "./routes/hotels.js";
import bookingRoutes from "./routes/bookings.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";

dotenv.config();

const app = express();

/* =========================
   LOGGING MIDDLEWARE
========================= */
app.use((req, res, next) => {
  console.log("➡️", req.method, req.url);
  next();
});

/* =========================
   GLOBAL MIDDLEWARE
========================= */
app.use(cors());
app.use(express.json());

/* =========================
   ROUTES
========================= */
app.use("/api/auth", authRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api", searchRoutes);
// app.use("/api/users", userRoutes); // enable later if needed

/* =========================
   HEALTH CHECK
========================= */
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

/* =========================
   GLOBAL ERROR HANDLER
========================= */
app.use((err, req, res, next) => {
  console.error("🔥 Error:", err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

/* =========================
   ENV VALIDATION
========================= */
if (!process.env.MONGO_URI) {
  throw new Error("❌ MONGO_URI is not defined in .env");
}

const PORT = process.env.PORT || 5000;

/* =========================
   START SERVER
========================= */
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
