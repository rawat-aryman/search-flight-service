const {Airplane} = require('../models/index');

class AirplaneRepository{

    async getCapacity(id){
        try {
            const response = await Airplane.findByPk(id);
            console.log(id);
            const capacity = response.Capacity;

            console.log('airplane capacity succesfully returned');
            return capacity;
        } catch (error) {
            console.log('something went wrong while returning the airplane capacity');
            throw new Error(error);
        }
    }
}

module.exports = {
    AirplaneRepository
}