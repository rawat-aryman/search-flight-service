const { CityRepository } = require('../repository/index');
const { CrudService } = require('./crud-service');

const cityRepository = new CityRepository();

class CityService extends CrudService{
    constructor(){
        super(cityRepository)
        this.cityRepository = new CityRepository();
    }

    async getAllCity(){
        try {
            const response = await this.cityRepository.getAllCtiy();

            return response;
        } catch (error) {
            console.log("Something went wrong GET ALL city service");
            throw new Error("Cannot get all city " + error.message);
        }
    }

    async searchCity(query){
        
        try {
            const response = await this.cityRepository.searchCity(query);
    
            return response;
            
        } catch (error) {
            console.log("Something went wrong search city service");
            throw new Error("Cannot search city " + error.message);
        }
    }
}

module.exports = {
    CityService
}