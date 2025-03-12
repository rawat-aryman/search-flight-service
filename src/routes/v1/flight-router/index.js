const express = require('express');
const flightController = require('../../../controllers/index');


const router = express.Router();

// POST api
router.post('/', flightController.createFlight);

module.exports = router;
