const {City} = require('../models/index');

class CityRepository {
    async createCity({ name }){
        try{
            console.log(name);
            console.log("hello");
            const city = await City.create({ 
                name: name
             });
            console.log(city);

        }catch(error){
            throw new Error('Cannot create city: ' + error.message);
        }
    }

    async deleteCity(cityId){
        try {
            await City.destroy({
                where: {
                    id: cityId,
                }
            });

            console.log("City deleted successfully with id " , cityId);
        } catch (error) {
            throw new Error('Cannot delete city: ' + error.message);
        }
    }

    async getCity(cityId){
        try {
            const city = await City.findOne({
                where: {
                    id: cityId,
                }
            });

            if(city === null){
                return `No city found with the give id: ${cityId}`;
            }

            return city;
        } catch (error) {
            console.log("Something went wrong in the city-repository getCity fn");
            throw new Error('Cannot get city: ' + error.message);
        }
    }

    async updateCity({cityId, name}){
        try {
            // 1st way to update
            const city = await City.findOne({
                where: {
                    id: cityId,
                }
            })

            await city.update({name});

            await city.save();

            console.log("City updated successfully");

            // 2nd way to update
            // const [results, metadata] = await sequelize.query('UPDATE cities SET name = name where id = cityId');
        } catch (error) {
            console.log("Something went wrong in the city-repository updateCity fn");
            throw new Error('Cannot update city: ' + error.message);
        }
    }

}

module.exports = {
    CityRepository
}