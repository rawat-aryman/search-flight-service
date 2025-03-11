const express = require('express');
const airportController = require('../../../controllers/index');

const router = express.Router();


// Airport GET api
router.get(':airportId',airportController.getAirport);


// Airport DELETE api
router.delete('/:id', airportController.deleteAirport);

// Airport PATCH api
router.patch('/:id', airportController.updateAirport);

// Airport POST api
router.post('/', airportController.addAirport);


module.exports = router;