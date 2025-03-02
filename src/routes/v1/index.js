const express = require('express');
const cityController = require('../../controllers/index');
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


module.exports = router;