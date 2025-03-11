const { AirportService } = require('../services/index');

const airportService = new AirportService();

const getAirport = async (req,res,next) => {
    try {
        const airportId = req.params.airportId;
        const response = await airportService.getAirport(airportId);

        return res.status(200).json({
            data: response,
            success: true,
            message: `airport returned with id: ${airportId}`,
            error: {}
        });
    } catch (error) {
        console.log('Something went wrong with airport controller');
        return res.status(500).json({
            data: {},
            success: false,
            message: `Something went wrong while returning airport with id:`,
            error: error.message
        });
    }
}

const addAirport = async (req,res,next) => {
    try {
        const data = req.body;

        const response = await airportService.addAirport(data);

        if(response == {}){
            throw new Error('Cannot add Airport - airport controller');
        }


        return res.status(200).json({
            data: response,
            success: true,
            message: `Airport added successfully`,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: `Cannot add airport`,
            err: error.message
        })
    }
}

const deleteAirport = async (req,res,next) => {
    try {
        var airportId = req.params.id;
        const data = {
            airportId
        }
        const response = await airportService.deleteAirport(data);

        console.log(`Airport with id: ${airportId} deleted successfully`);
        return res.status(200).json({
            data: response,
            success: true,
            message: `Airport with id: ${airportId} deleted successfully`,
            err: {}
        });
    } catch (error) {
        console.log(`Something went wrong while deleting airport with id: ${airportId}`);
        return res.status(500).json({
            data: {},
            success: false,
            message: `Something went wrong while deleting airport with id: ${airportId}`,
            err: error.message
        })
    }
}

const updateAirport = async (req, res, next) =>{
    try {
        var airportId = req.params.id;
        const data = req.body;
        let finalData = {};
        finalData.airportId = airportId;
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
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Airport successfully updated with id: ' + airportId,
            err: {}
        });
    } catch (error) {
        console.log('Something went wrong while updating airport with id: ' + airportId);
        return res.status(500).json({
            data: {},
            success: false,
            message: `Something went wrong while updating airport with id: ${airportId}`,
            err: error.message
        })
    }
}

module.exports = {
    getAirport,
    addAirport,
    deleteAirport,
    updateAirport
}