const { createCity, deleteCity, getCity, updateCity, getAllCity, searchCity } = require("./city-controller");
const { getAirport, addAirport, deleteAirport, updateAirport } = require('./airport-controller');

module.exports = {
    createCity,
    deleteCity,
    getCity,
    updateCity,
    getAllCity,
    searchCity,
    getAirport,
    addAirport,
    deleteAirport, 
    updateAirport
}