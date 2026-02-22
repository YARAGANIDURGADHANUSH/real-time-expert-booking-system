const Booking = require("../models/Booking");

/* ===============================
   CREATE BOOKING
================================= */
exports.createBooking = async (req, res, next) => {
  try {
    /* ✅ VALIDATION */
    const { expertId, name, email, phone, date, timeSlot, notes } = req.body;

    if (!expertId || !name || !email || !phone || !date || !timeSlot) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be provided"
      });
    }

    /* ✅ CREATE BOOKING */
    const booking = await Booking.create({
      expertId,
      name,
      email,
      phone,
      date,
      timeSlot,
      notes
    });

    /* ✅ REAL-TIME SLOT UPDATE */
    if (req.io) {
      req.io.emit("slotBooked", booking);
    }

    res.status(201).json({
      success: true,
      message: "Booking successful",
      booking
    });

  } catch (err) {

    /* ✅ DOUBLE BOOKING ERROR */
    if (err.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Slot already booked"
      });
    }

    next(err);
  }
};


/* ===============================
   UPDATE BOOKING STATUS
================================= */
exports.updateStatus = async (req, res, next) => {
  try {
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({
        message: "Status is required"
      });
    }

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found"
      });
    }

    res.json({
      success: true,
      booking
    });

  } catch (err) {
    next(err);
  }
};


/* ===============================
   GET BOOKINGS BY EMAIL
================================= */
exports.getBookings = async (req, res, next) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({
        message: "Email query parameter required"
      });
    }

    const bookings = await Booking.find({ email })
      .populate("expertId");

    res.json({
      success: true,
      bookings
    });

  } catch (err) {
    next(err);
  }
};