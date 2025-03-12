const express = require('express');
const cityApi = require('./city-router/index');
const airportApi = require('./airport-router/index');
const flightApi = require('./flight-router/index');

const router = express.Router();

// Either we can write all the API endpoints over here, or we can a bit of cleanup by writing the separate routes in separate files, providing more readablity...

router.use('/city',cityApi);
router.use('/airport', airportApi);
router.use('/flight',flightApi);


module.exports = router;