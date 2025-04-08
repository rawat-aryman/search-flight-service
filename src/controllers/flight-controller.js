const {FlightService} = require('../services/index');
const {createFlightData} = require('../middleware/index');
const { success_codes, client_side_errors, server_errors } = require('../utils/error-codes');
const { returnResponse } = require('../utils/response-format');

const flightService = new FlightService();
// const flightMiddleware = new FlightMiddleware();

const createFlight = async (req, res, next) => {
    try {
        const data = req.body;
        const sanitizedData = createFlightData(data);

        const response = await flightService.createFlight(sanitizedData);

        console.log('Flight created successfully');
        return res.status(success_codes.created).json(returnResponse(1,response,'Flight created successfully'));
    } catch (error) {
        console.log('Something went wrong in flight controller');
        return res.status(server_errors.internal_server_error).json(returnResponse(0,error.message,'Something went wrong while creating Flight -- Flight controller'));
    }
}

module.exports = {
    createFlight
}