const { AirplaneService } = require('../services/index');
const { success_codes, client_side_errors, server_errors } = require('../utils/error-codes.js');
const { returnResponse } = require('../utils/response-format.js');
const { airportService } = require('./airport-controller.js');

const airplaneService = new AirplaneService();

const getAirplane = async (req,res,next) => {
    try {
        const airplaneId = req.params.airplaneId;
        const response = await airplaneService.getAirplane(airplaneId);

        return res.status(success_codes.ok).json(returnResponse(1,response,'airplane returned'));
    } catch (error) {
        console.log('Something went wrong with airplane controller');
        return res.status(server_errors.internal_server_error).json(returnResponse(0,error.message,"Something went wrong while returning airplane with id:"));
    }
}

const getAllAirplane = async (req,res,next) => {
    try {
        const response = await airplaneService.getAllAirplane();

        return res.status(success_codes.ok).json(returnResponse(1,response,'airplanes returned'));
    } catch (error) {
        console.log('Something went wrong with airplane controller');
        return res.status(server_errors.internal_server_error).json(returnResponse(0,error.message,"Something went wrong while returning all airplanes"));
    }
}

const addAirplane = async (req,res,next) => {
    try {
        const data = req.body;

        const response = await airplaneService.addAirplane(data);

        if(response == {}){
            throw new Error('Cannot add Airplane - airplane controller');
        }


        return res.status(success_codes.created).json(returnResponse(1,response,'airplane added successfully'));
    } catch (error) {
        return res.status(server_errors.internal_server_error).json(returnResponse(0,error.message,'Cannot add Airplane - airplane controller'));
    }
}

const deleteAirplane = async (req,res,next) => {
    try {
        var airplaneId = req.params.id;
        const data = {
            airplaneId
        }
        const response = await airplaneService.deleteAirplane(data);

        console.log(`Airplane with id: ${airplaneId} deleted successfully`);
        return res.status(success_codes.ok).json(returnResponse(1,response,"Airplane deleted successfully"));
    } catch (error) {
        console.log(`Something went wrong while deleting Airplane with id: ${airplaneId}`);
        return res.status(server_errors.internal_server_error).json(returnResponse(0,error.message,"Something went wrong while deleting Airplane"));
    }
}

const updateAirplane = async (req, res, next) =>{
    try {
        var airplaneId = req.params.id;
        const data = req.body;
        let finalData = {};
        finalData.airplaneId = airplaneId;
        // sanitzed data
        const {name:airportName, address:airportAddress, cityId} = data;

        if(airportName === undefined){
            throw new Error('Please provide valid info to update Airport');
        }
        else {
            finalData.airportName = airportName;
        }

        if(airportAddress !== undefined){
            finalData.airportAddress = airportAddress;
        }

        if(cityId !== undefined){
            finalData.cityId = cityId;
        }

        // passing it to the service layer
        const response = await airportService.updateAirport(finalData);

        if(response == {}){
            throw new Error('Cannot update airport with id : ' + airportId);
        }

        console.log('Airport successfully updated with id: ' + airportId);
        return res.status(success_codes.ok).json(returnResponse(1,response,"Airplane successfully updated"));
    } catch (error) {
        console.log('Something went wrong while updating airport with id: ' + airportId);
        return res.status(server_errors.internal_server_error).json(returnResponse(0,error.message,"Something went wrong while updating airplane"));
    }
}

module.exports = {
    getAirplane,
    getAllAirplane,
    addAirplane,
    deleteAirplane,
    updateAirplane
}