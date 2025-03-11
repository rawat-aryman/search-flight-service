const express = require('express');
const cityController = require('../../controllers/index');
const airportController = require('../../controllers/index');

const router = express.Router();


// GET apis
router.get('/city/:id',cityController.getCity);

router.get("/cities", cityController.getAllCity);

router.get("/searchCity", cityController.searchCity);

// POST apis
router.post('/city',cityController.createCity);

// DELETE apis
router.delete('/city/:id',cityController.deleteCity);

// PATCH apis
router.patch('/city/:id',cityController.updateCity);


// Airport GET api
router.get('/airport/:airportId',airportController.getAirport);

// Airport POST api
router.post('/airport', airportController.addAirport);

// Airport DELETE api
router.delete('/airport/:id', airportController.deleteAirport);

// Airport PATCH api
router.patch('/airport/:id', airportController.updateAirport);

module.exports = router;