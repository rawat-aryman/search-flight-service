const {City, Airport} = require('../models/index');
const { CrudRepository } = require('./crud-repository');


class AirportRepository extends CrudRepository{

    constructor(){
        super(Airport);
    }

    async getAirport(airportId){
        try {
            const response = await this.getInstance(airportId);

            return response;
        } catch (error) {
            throw new Error('Something went wrong in Airport repository');
        }
    }

    async getAllAirport(){
        try {
            const response = await Airport.findAll();

            return response;
        } catch (error) {
            console.log('Something went wront while returning airport with Id ' + airportId);
            throw new Error(error);
        }
    }

    async addAirport(data){
        try {
            const {name:airportName, address:airportAddress, cityId} = data;
            
            if(cityId !== undefined){
                const city = await City.findOne({
                    where: {
                        id: cityId
                    }
                })

                console.log(city);
            }
            else{
                throw new Error("Please pass valid cityId");
            }

            const response = await this.createInstance({
                name: airportName,
                address: airportAddress,
                cityId
            });

            return response;
        } catch (error) {
            console.log("Something went wrong with airport repository");
            throw new Error(error);
        }
    }

    async deleteAirport(data){
        try {
            // data sanitization
            const {airportId} = data;

            // making call to db to delete the entry
            const response = await this.deleteInstance(airportId);

            if(response === 0){
                throw new Error('Provide valid airport Id')
            }
            // returning the response
            return response;
        } catch (error) {
            console.log("Something went wrong while deleting the entry in repository");
            throw new Error(error);
        }
    }

    async updateAirport(data){
        try {
            const fetchData = () => {

                const finalData = {};

                for(const [key, value] of Object.entries(data)){
                    if(key === 'airportId'){
                        var id = value;
                        finalData.id = value;
                    }
                    else if(key === 'airportName'){
                        var name = value;
                        finalData.name = value;
                    }
                    else if(key === 'airportAddress'){
                        var address = value;
                        finalData.address = value;
                    }
                    else if(key === 'cityId'){
                        var cityId = value;
                         finalData.cityId = cityId;
                    }
                }

                return finalData;
            }

            const ans = fetchData();

            // updating the airport data
            const response = await this.updateInstance(data.airportId, ans);

            const updateData = await this.getInstance(data.airportId);

            // if(response == []){
            //     throw new Error(`Something went wrong while updating airport with Id : ${data.airportId}`);
            // }

            console.log(`Airport with id : ${data.airportId} updated successfully`);
            return updateData;

        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = AirportRepository;