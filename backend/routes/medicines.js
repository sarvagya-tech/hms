const express = require('express');
const { getMedicines, getMedicine } = require('../controllers/medicines');

const router = express.Router();

router.get('/', getMedicines);
router.get('/:id', getMedicine);

module.exports = router;
