const express = require("express");
const router = express.Router();

const {
  createBooking,
  updateBookingStatus,
  getBookingsByEmail,
} = require("../controllers/bookingController");

router.post("/bookings", createBooking);
router.patch("/bookings/:id/status", updateBookingStatus);
router.get("/bookings", getBookingsByEmail);

module.exports = router;