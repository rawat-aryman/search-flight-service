const { FlightRepository } = require('../repository/index');

class FlightService {

    constructor() {
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data){
        try {
            const response = await this.flightRepository.createFlight(data);

            return response;
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = {
    FlightService
}