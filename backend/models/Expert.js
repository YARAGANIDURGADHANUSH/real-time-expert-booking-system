const mongoose = require("mongoose");

const slotSchema = new mongoose.Schema({
  date: String,
  slots: [String],
});

const expertSchema = new mongoose.Schema({
  name: String,
  category: String,
  experience: Number,
  rating: Number,
  bio: String,
  availableSlots: [slotSchema],
});

module.exports = mongoose.model("Expert", expertSchema);