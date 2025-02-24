const City = require('../models/index');

class CityRepository {
    async createCity({ name }){
        try{
            const city = await City.create({ name });
            return city;

        }catch(error){
            throw {error};
        }
    }

    async deleteCity(cityId){
        try {
            await City.destroy({
                where: {
                    id: cityId,
                }
            });
        } catch (error) {
            throw {error};
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
            throw {error};
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

            // 2nd way to update
            const [results, metadata] = await sequelize.query('UPDATE cities SET name = name where id = cityId');
        } catch (error) {
            
        }
    }

}