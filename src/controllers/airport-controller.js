const { AirportService } = require('../services/index');
const { success_codes, client_side_errors, server_errors } = require('../utils/error-codes.js');
const { returnResponse } = require('../utils/response-format');
const airportService = new AirportService();
exports.airportService = airportService;

const getAirport = async (req,res,next) => {
    try {
        const airportId = req.params.airportId;
        console.log(airportId);
        const response = await airportService.getInstanceService(airportId);

        return res.status(success_codes.ok).json(returnResponse(1,response,'airport returned'));
    } catch (error) {
        console.log('Something went wrong with airport controller');
        return res.status(server_errors.internal_server_error).json(returnResponse(0,error.message,"Something went wrong while returning airport"));
    }
}

const getAllAirport = async (req,res,next) => {
    try {
        const response = await airportService.getAllAirport();

        return res.status(success_codes.ok).json(returnResponse(1,response,'airports returned'));
    } catch (error) {
        console.log('Something went wrong with airport controller');
        return res.status(server_errors.internal_server_error).json(returnResponse(0,error.message,"Something went wrong while returning all airports"));
    }
}

const addAirport = async (req,res,next) => {
    try {
        const data = req.body;

        const response = await airportService.addInstanceService(data);

        if(response == {}){
            throw new Error('Cannot add Airport - airport controller');
        }


        return res.status(success_codes.created).json(returnResponse(1,response,'airport added successfully'));
    } catch (error) {
        return res.status(server_errors.internal_server_error).json(returnResponse(0,error.message,'Cannot add Airport - airport controller'));
    }
}

const deleteAirport = async (req,res,next) => {
    try {
        var airportId = req.params.id;
        const data = {
            airportId
        }
        const response = await airportService.deleteInstanceService(data.airportId);

        console.log(`Airport with id: ${airportId} deleted successfully`);
        return res.status(success_codes.ok).json(returnResponse(1,response,"Airport deleted successfully"));
    } catch (error) {
        console.log(`Something went wrong while deleting airport with id: ${airportId}`);
        return res.status(server_errors.internal_server_error).json(returnResponse(0,error.message,"Something went wrong while deleting Airport"));
    }
}

const updateAirport = async (req, res, next) =>{
    try {
        var airportId = req.params.id;
        const data = req.body;
        let finalData = {};
        // finalData.airportId = airportId;
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
        const response = await airportService.updateInstanceService(airportId, finalData);

        if(response == {}){
            throw new Error('Cannot update airport with id : ' + airportId);
        }

        console.log('Airport successfully updated with id: ' + airportId);
        return res.status(success_codes.ok).json(returnResponse(1,response,"Airport successfully updated"));
    } catch (error) {
        console.log('Something went wrong while updating airport with id: ' + airportId);
        return res.status(server_errors.internal_server_error).json(returnResponse(0,error.message,"Something went wrong while updating airplane"));
    }
}

module.exports = {
    getAirport,
    getAllAirport,
    addAirport,
    deleteAirport,
    updateAirport
}