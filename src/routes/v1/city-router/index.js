const express = require('express');
const cityController = require('../../../controllers/index');


const router = express.Router();


// GET apis
router.get('/:id',cityController.getCity);

router.get("/all", cityController.getAllCity);

router.get("/search", cityController.searchCity);


// DELETE apis
router.delete('/:id',cityController.deleteCity);

// PATCH apis
router.patch('/:id',cityController.updateCity);

// POST apis
router.post('/',cityController.createCity);

module.exports = router;
