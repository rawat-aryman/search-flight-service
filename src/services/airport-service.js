const { AirportRepository } = require('../repository/index');
const { CrudService } = require('./crud-service');

const airportRepository = new AirportRepository();

class AirportService extends CrudService {

    constructor(){
        super(airportRepository)
    }

    async getAllAirport(){
        try {
            const response = await airportRepository.getAllAirport();
            console.log(response);
            return response;
        } catch (error) {
            console.log("Something went wrong with airport service GET all Airports");
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