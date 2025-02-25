const express = require('express');
const cityController = require('../../controllers/index');
const router = express.Router();



router.get('/city/:id',cityController.getCity);


router.post('/city',cityController.createCity);

router.delete('/city/:id',cityController.deleteCity);

router.patch('/city/:id',cityController.updateCity);

module.exports = router;