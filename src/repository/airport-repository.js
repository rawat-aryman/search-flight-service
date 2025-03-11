const {City, Airport} = require('../models/index');

class AirportRepository {

    async getAirport(airportId){
        try {
            // EAGER LOADING
            // const response = await Airport.findOne({
            //     where: {
            //         id: airportId
            //     },
            //     include: City,
            // });

            // LAZY LOADING
            const response = await Airport.findOne({
                where: {
                    id: airportId,
                }
            })

            const {name, address} = response;

            const {name:cityName} = await response.getCity();

            const final = {
                name,
                address,
                cityName
            }
            
            return final;
        } catch (error) {
            console.log('Something went wront while returning airport with Id ' + airportId);
            throw new Error(error);
        }
    }

    async addAirport(data){
        try {
            const {name:airportName, address:airportAddress, cityId} = data;
            console.log(`cityId is equal to ${cityId}`);
            
            if(cityId !== undefined){
                const city = await City.findOne({
                    id: cityId
                })
            }
            else{
                throw new Error("Please pass valid cityId");
            }

            const response = await Airport.create({
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
            const response = await Airport.destroy({
                where: {
                    id : airportId,
                },
            });

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
            const response = await Airport.update(
                ans,
                {
                    where: {
                        id: data.airportId,
                    },
                }
            )

            const updateData = await Airport.findByPk(data.airportId);

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