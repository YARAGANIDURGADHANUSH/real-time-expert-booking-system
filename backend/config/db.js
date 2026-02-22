const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 30000
    });

    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);

    // IMPORTANT: DO NOT EXIT
    // process.exit(1);  ❌ REMOVE THIS
  }
};

module.exports = connectDB;