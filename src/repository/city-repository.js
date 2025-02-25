const {City} = require('../models/index');

class CityRepository {
    async createCity({ name }){
        try{
            const city = await City.create({ 
                name: name
            });
            if(city) console.log(`City ${city.name} created successfully`);
            return city;

        }catch(error){
            throw new Error('Cannot create city: ' + error.message);
        }
    }

    async deleteCity(id){
        // try {
            
        // }

        await City.destroy({
            where: {
                id: id
            }
        });

        console.log("City deleted successfully with id " , id);

        return true;
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

    async updateCity(id, {name}){
        try {
            // 1st way to update
            const city = await City.findOne({
                where: {
                    id: id,
                }
            })

            await city.update({name});

            await city.save();

            console.log("City updated successfully");
            return city;
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