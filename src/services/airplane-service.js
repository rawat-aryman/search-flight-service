const { CrudService } = require("./crud-service");
const { Airplane } = require('../models/index');
const { AirplaneRepository } = require('../repository/index')

class AirplaneService extends CrudService{
    constructor(){
        super(AirplaneRepository);
    }
}

module.exports = {
    AirplaneService
}