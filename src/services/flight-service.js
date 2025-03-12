const { FlightRepository, AirplaneRepository } = require('../repository/index');

class FlightService {

    constructor() {
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

    async createFlight(data){
        try {
            // fetch the capacity of the airplane
            const airplaneId = data.airplaneId;
            const capacity = await this.airplaneRepository.getCapacity(airplaneId);

            data.remainingSeats = capacity;
            
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