const Report = require('../models/Report');

// @desc    Get current user's reports
// @route   GET /api/reports/my-reports
// @access  Private
exports.getMyReports = async (req, res, next) => {
  try {
    const reports = await Report.find({ user: req.user.id });

    res.status(200).json({
      success: true,
      count: reports.length,
      data: reports,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
