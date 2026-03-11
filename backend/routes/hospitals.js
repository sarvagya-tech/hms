const express = require('express');
const { getHospitals, getHospital } = require('../controllers/hospitals');

const router = express.Router();

router.get('/', getHospitals);
router.get('/:id', getHospital);

module.exports = router;
