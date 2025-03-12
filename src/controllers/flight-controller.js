const {FlightService} = require('../services/index');
const {createFlightData} = require('../middleware/index');

const flightService = new FlightService();
// const flightMiddleware = new FlightMiddleware();

const createFlight = async (req, res, next) => {
    try {
        const data = req.body;
        const sanitizedData = createFlightData(data);

        const response = await flightService.createFlight(sanitizedData);

        console.log('Flight created successfully');
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Flight created successfully', 
            err: {}
        });
    } catch (error) {
        console.log('Something went wrong in flight controller');
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Something went wrong in flight controller', 
            err: error.message
        });
    }
}

module.exports = {
    createFlight
}