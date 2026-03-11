const express = require('express');
const { bookTest, getMyBookings } = require('../controllers/testBookings');

const router = express.Router();

const { protect } = require('../middlewares/auth');

router.post('/', protect, bookTest);
router.get('/my-bookings', protect, getMyBookings);

module.exports = router;
