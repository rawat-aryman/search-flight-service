const express = require('express');
const cityController = require('../../controllers/index');
const airportController = require('../../controllers/index');
const cityApi = require('./city-router/index');
const airportApi = require('./airport-router/index');

const router = express.Router();


router.use('/city',cityApi);
router.use('/airport', airportApi);


module.exports = router;