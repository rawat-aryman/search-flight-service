const { createCity, deleteCity, getCity, updateCity, getAllCity, searchCity } = require("./city-controller");
const { getAirport, getAllAirport, addAirport, deleteAirport, updateAirport } = require('./airport-controller');
const { createFlight } = require('./flight-controller');
const { getAirplane, getAllAirplane, addAirplane, deleteAirplane, updateAirplane } = require('./airplane-controller');

module.exports = {
    createCity,
    deleteCity,
    getCity,
    updateCity,
    getAllCity,
    searchCity,
    getAirport,
    getAllAirport,
    addAirport,
    deleteAirport, 
    updateAirport,
    createFlight,
    getAirplane,
    getAllAirplane,
    addAirplane,
    deleteAirplane,
    updateAirplane
}