const { AirportRepository } = require('../repository/index');

const airportRepository = new AirportRepository();

class AirportService {

    async getAirport(airportId){
        try {
            const initialResponse = await airportRepository.getAirport(airportId);

            return initialResponse;
        } catch (error) {
            console.log("Something went wrong with airport service GET Airport");
            throw new Error(error);
        }
    }

    async addAirport(data){
        try {
            const response = await airportRepository.addAirport(data);

            console.log("Airport added successfully");
            return response;
        } catch (error) {
            console.log("Something went wrong while adding airport in airport service");
            throw new Error(error);
        }
    }

    async deleteAirport(data){
        try {
            const response = await airportRepository.deleteAirport(data);

            console.log("Airport deleted successfully");
            return response;
        } catch (error) {
            console.log("Something went wrong while deleting airport in airport service");
            throw new Error(error);
        }
    }

    async updateAirport(data){
        try {
            const response = await airportRepository.updateAirport(data);

            console.log(`Airport with id : ${data.airportId} updated successfully`);
            return response;
        } catch (error) {
            console.log("Something went wrong while updating airport in airport service");
            throw new Error(error);
        }
    }
}

module.exports = {
    AirportService
}