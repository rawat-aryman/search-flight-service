const {City} = require('../models/index');
const {Op} = require('sequelize');
const { CrudRepository } = require('./crud-repository');

class CityRepository extends CrudRepository {

    constructor(){
        super(City);
    }

    async getAllCtiy(){
        try {
            const response = await City.findAll();
            console.log("returned all the cities");
            console.log(response);
            return response;
        } catch (error) {
            console.log("Something went wrong in the city-repository getAllCity fn");
            throw new Error('Cannot returned all cities: ' + error.message);
        }
    }

    async searchCity(query){
        try {
            const response = await City.findAll({
                where: {
                    name: {
                        [Op.like] : `${query}%`
                    },
                },
            })

            if(response === null) {
                response = `No city found with the given string; ${query}`;
            }

            return response;
        } catch (error) {
            console.log("Something went wrong in the city-repository searchCity fn");
            throw new Error('Cannot search cities: ' + error.message);
        }
    }

}

module.exports = {
    CityRepository
}