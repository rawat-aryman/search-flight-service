const {Flight} = require('../models/index');

class FlightRepository{

    async createFlight(data){
        try {
            const response = await Flight.create(data);

            console.log('Flight successfully created');
            return response;
        } catch (error) {
            console.log('Something went wrong while creating a flight entry in flight-repository');
            throw new Error(error);
        }
    }

}

module.exports = {
    FlightRepository
}