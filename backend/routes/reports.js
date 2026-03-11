const express = require('express');
const { getMyReports } = require('../controllers/reports');

const router = express.Router();

const { protect } = require('../middlewares/auth');

router.get('/my-reports', protect, getMyReports);

module.exports = router;
