const Newsletter = require('../models/Newsletter');

// @desc    Subscribe to newsletter
// @route   POST /api/newsletter/subscribe
// @access  Public
exports.subscribe = async (req, res, next) => {
  try {
    const { email } = req.body;

    // Check if email already subscribed
    let subscriber = await Newsletter.findOne({ email });

    if (subscriber) {
      return res.status(400).json({ success: false, message: 'Email already subscribed' });
    }

    subscriber = await Newsletter.create({ email });

    res.status(201).json({
      success: true,
      message: 'Thanks for subscribing!',
      data: subscriber,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
