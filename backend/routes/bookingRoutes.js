const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");

router.post("/bookings", bookingController.createBooking);
router.patch("/bookings/:id/status", bookingController.updateStatus);
router.get("/bookings", bookingController.getBookings);

module.exports = router;