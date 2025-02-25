const { CityRepository } = require('../repository/index');

class CityService{
    constructor(){
        this.cityRepository = new CityRepository();
    }

    async createCity(data){ // { name: "city_Name"}
        try {
            const city = await this.cityRepository.createCity(data);
            if(city !== null){
                console.log(`City with cityid ${city.id} created`);
            }
            else{
                console.log("Something went wrong while creating the city");
                throw new Error("Cannot create city, city is null");
            }

            return city;
        } catch (error) {
            console.log("Something went wrong CREATE city service");
            throw new Error("Cannot create city " + error.message);
        }
    }

    async deleteCity(data){ // { id: "cityId"}
        try {
            const response = await this.cityRepository.deleteCity({ id });
            if(response === true){
                console.log(`City with cityid ${city.id} deleted`);
            }
            else{
                console.log("Something went wrong while deleting the city");
                throw new Error("Cannot delete city, city is null");
            }

            return city;
        } catch (error) {
            console.log("Something went wrong DELETE city service");
            throw new Error("Cannot delete city " + error.message);
        }
    }

    async getCity(data){ // { id: "cityId"}
        try {
            const response = await this.cityRepository.getCity({ id });
            if(response !== null){
                console.log(`City with cityid ${response.id} returned`);
            }
            else{
                console.log("Something went wrong while getting the city");
                throw new Error("Cannot get city, city is null");
            }

            return city;
        } catch (error) {
            console.log("Something went wrong GET city service");
            throw new Error("Cannot get city " + error.message);
        }
    }

    async updateCity(data){ // { id: "cityId"}
        try {
            const response = await this.cityRepository.updateCity(data);
            if(response !== null){
                console.log(`City with cityid ${response.id} updated`);
            }
            else{
                console.log("Something went wrong while updating the city");
                throw new Error("Cannot update city, city is null");
            }

            return city;
        } catch (error) {
            console.log("Something went wrong PATCH city service");
            throw new Error("Cannot update city " + error.message);
        }
    }
}

module.exports = {
    CityService
}