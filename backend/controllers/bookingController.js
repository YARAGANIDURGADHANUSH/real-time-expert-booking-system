const Booking = require("../models/Booking");

/* CREATE BOOKING */
exports.createBooking = async (req, res, next) => {
  try {
    const booking = await Booking.create(req.body);

    // realtime update
    req.io.emit("slotBooked", booking);

    res.status(201).json({
      message: "Booking successful"
    });
  } catch (err) {

    if (err.code === 11000) {
      return res.status(400).json({
        message: "Slot already booked"
      });
    }

    next(err);
  }
};

/* UPDATE STATUS */
exports.updateStatus = async (req, res) => {
  const booking = await Booking.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );

  res.json(booking);
};

/* GET BOOKINGS BY EMAIL */
exports.getBookings = async (req, res) => {
  const bookings = await Booking.find({
    email: req.query.email
  }).populate("expertId");

  res.json(bookings);
};