const Booking = require("../models/Booking");
const Expert = require("../models/Expert");

/* CREATE BOOKING */
const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);

    // realtime update
    req.io.emit("slotBooked", booking);

    res.status(201).json(booking);
  } catch (error) {
    console.error(error);

    if (error.code === 11000) {
      return res.status(400).json({
        message: "Slot already booked",
      });
    }

    res.status(500).json({ message: "Server Error" });
  }
};

/* UPDATE STATUS */
const updateBookingStatus = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    res.json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

/* GET BOOKINGS BY EMAIL */
const getBookingsByEmail = async (req, res) => {
  try {
    const bookings = await Booking.find({
      email: req.query.email,
    }).populate("expertId");

    res.json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  createBooking,
  updateBookingStatus,
  getBookingsByEmail,
};