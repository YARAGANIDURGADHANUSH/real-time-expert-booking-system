const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

const mongoose = require("mongoose");
require("dotenv").config({ path: __dirname + "/.env" });

const Expert = require("./models/Expert");

console.log("MONGO URI:", process.env.MONGO_URI);

/* ---------- CONNECT DATABASE ---------- */

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ DB Connection Failed:", error.message);
    process.exit(1);
  }
};

/* ---------- SAMPLE DATA ---------- */

const experts = [
  {
    name: "Dr Rahul Sharma",
    category: "Career Guidance",
    experience: 8,
    rating: 4.7,
    bio: "Career mentor helping students choose the right path.",
    availableSlots: [
      {
        date: "2026-02-23",
        slots: ["10:00 AM", "11:00 AM", "2:00 PM"]
      }
    ]
  },
  {
    name: "Anita Verma",
    category: "Software Development",
    experience: 6,
    rating: 4.5,
    bio: "Full-stack developer and interview coach.",
    availableSlots: [
      {
        date: "2026-02-24",
        slots: ["9:00 AM", "1:00 PM"]
      }
    ]
  },
  {
    name: "Kiran Patel",
    category: "AI/ML",
    experience: 5,
    rating: 4.6,
    bio: "Machine learning engineer specializing in AI.",
    availableSlots: [
      {
        date: "2026-02-25",
        slots: ["10:30 AM", "4:00 PM"]
      }
    ]
  }
];

/* ---------- SEED FUNCTION ---------- */

const seedData = async () => {
  try {
    await connectDB();

    await Expert.deleteMany();
    console.log("🧹 Old experts removed");

    await Expert.insertMany(experts);
    console.log("🎉 Experts inserted successfully");

    process.exit();
  } catch (error) {
    console.error("❌ Seeding error:", error);
    process.exit(1);
  }
};

seedData();