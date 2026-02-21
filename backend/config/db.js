const mongoose = require("mongoose");
const dns = require("dns");

/* ⭐ FORCE NODE TO USE IPV4 DNS */
dns.setServers(["8.8.8.8", "8.8.4.4"]); // Google DNS
dns.setDefaultResultOrder("ipv4first");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("DB Connection Failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;