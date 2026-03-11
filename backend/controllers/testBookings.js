const TestBooking = require('../models/TestBooking');

// @desc    Book a lab test
// @route   POST /api/test-bookings
// @access  Private
exports.bookTest = async (req, res, next) => {
  try {
    req.body.user = req.user.id;

    const booking = await TestBooking.create(req.body);

    res.status(201).json({
      success: true,
      data: booking,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// @desc    Get current user's test bookings
// @route   GET /api/test-bookings/my-bookings
// @access  Private
exports.getMyBookings = async (req, res, next) => {
  try {
    const bookings = await TestBooking.find({ user: req.user.id });

    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
