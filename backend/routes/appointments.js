const express = require('express');
const { bookAppointment, getMyAppointments } = require('../controllers/appointments');

const router = express.Router();

const { protect } = require('../middlewares/auth');

router.post('/', protect, bookAppointment);
router.get('/my-appointments', protect, getMyAppointments);

module.exports = router;
