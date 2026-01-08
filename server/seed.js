import mongoose from "mongoose";
import dotenv from "dotenv";
import Hotel from "./models/Hotel.js";

dotenv.config();

/* ----------------- DATA SOURCES ----------------- */

/* 🇮🇳 Indian Cities */
const indianCitiesRaw = [
  "Mumbai, Maharashtra",
  "Delhi, Delhi",
  "Bangalore, Karnataka",
  "Chennai, Tamil Nadu",
  "Hyderabad, Telangana",
  "Pune, Maharashtra",
  "Kolkata, West Bengal",
  "Jaipur, Rajasthan",
  "Udaipur, Rajasthan",
  "Goa, Goa",
  "Kochi, Kerala",
  "Trivandrum, Kerala",
  "Coimbatore, Tamil Nadu",
  "Ooty, Tamil Nadu",
  "Manali, Himachal Pradesh",
  "Shimla, Himachal Pradesh",
  "Dehradun, Uttarakhand",
  "Rishikesh, Uttarakhand",
  "Amritsar, Punjab",
  "Chandigarh, Punjab",
  "Indore, Madhya Pradesh",
  "Bhopal, Madhya Pradesh",
  "Ahmedabad, Gujarat",
  "Surat, Gujarat",
  "Vadodara, Gujarat",
  "Varanasi, Uttar Pradesh",
  "Lucknow, Uttar Pradesh",
  "Agra, Uttar Pradesh",
  "Patna, Bihar",
  "Ranchi, Jharkhand"
];

/* 🌍 International Cities */
const internationalCities = [
  { city: "New York", country: "USA" },
  { city: "Los Angeles", country: "USA" },
  { city: "London", country: "UK" },
  { city: "Paris", country: "France" },
  { city: "Berlin", country: "Germany" },
  { city: "Rome", country: "Italy" },
  { city: "Barcelona", country: "Spain" },
  { city: "Dubai", country: "UAE" },
  { city: "Abu Dhabi", country: "UAE" },
  { city: "Singapore", country: "Singapore" },
  { city: "Bangkok", country: "Thailand" },
  { city: "Tokyo", country: "Japan" },
  { city: "Seoul", country: "South Korea" },
  { city: "Sydney", country: "Australia" },
  { city: "Melbourne", country: "Australia" },
  { city: "Toronto", country: "Canada" },
  { city: "Vancouver", country: "Canada" },
  { city: "Istanbul", country: "Turkey" },
  { city: "Amsterdam", country: "Netherlands" },
  { city: "Zurich", country: "Switzerland" }
];

/* Normalize Indian Cities */
const indianCities = indianCitiesRaw.map(c => ({
  city: c.split(",")[0],
  country: "India"
}));

/* Combine all cities */
const allCities = [...indianCities, ...internationalCities];

/* ----------------- HOTEL NAME PARTS ----------------- */
const hotelPrefixes = ["Royal", "Grand", "Elite", "Premium", "Comfort", "Urban", "Heritage", "Luxury", "Business", "Budget"];
const hotelSuffixes = ["Inn", "Residency", "Suites", "Palace", "Retreat", "Resort", "Stay", "Heights"];

/* ----------------- HELPERS ----------------- */
const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randomGuests = () => Math.floor(Math.random() * 4) + 1;
const randomPrice = (country) => country === "India" ? Math.floor(Math.random() * 7000) + 2000 : Math.floor(Math.random() * 15000) + 8000;
const randomDateRange = () => ({
  availableFrom: new Date("2026-01-01"),
  availableTo: new Date("2026-12-31"),
});

/* ----------------- GENERATOR ----------------- */
const generateHotels = (count) => {
  const hotels = [];
  for (let i = 0; i < count; i++) {
    const { city, country } = randomItem(allCities);

    hotels.push({
      name: `${randomItem(hotelPrefixes)} ${city} ${randomItem(hotelSuffixes)}`,
      city,
      country,
      location: `${city}, ${country}`,
      pricePerNight: randomPrice(country),
      maxGuests: randomGuests(),
      ...randomDateRange(),
    });
  }
  return hotels;
};

/* ----------------- SEEDER ----------------- */
const seedHotels = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("📦 MongoDB connected");

    await Hotel.deleteMany({});
    console.log("🗑️ Existing hotels cleared");

    const hotels = generateHotels(5000); // You can increase/decrease count

    const BATCH_SIZE = 1000;
    for (let i = 0; i < hotels.length; i += BATCH_SIZE) {
      await Hotel.insertMany(hotels.slice(i, i + BATCH_SIZE));
      console.log(`✅ Inserted ${Math.min(i + BATCH_SIZE, hotels.length)} hotels`);
    }

    console.log(`🎉 ${hotels.length} hotels seeded successfully`);
    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
};

seedHotels();
