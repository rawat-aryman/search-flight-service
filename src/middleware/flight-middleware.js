const { Helper } = require('../utils/helper');

const helper = new Helper();

// class FlightMiddleware{

//     createFlightData(data){
        
//         try {
//             const keys = ["flightId", "departureAirportId", "arrivalAirportId", "departureTime", "arrivalTime", "price"];
    
//             if(!checkUndefined(data,keys)){
//                 throw new Error('Please provide valid data to create a new flight');
//             }
    
//             const finaldata = createData(data,keys);
//             return finaldata;
            
//         } catch (error) {
//             throw new Error(error);
//         }
//     }
// }

const createFlightData = (data) => {
    try {
        const keys = ["flightId", "departureAirportId", "arrivalAirportId", "departureTime", "arrivalTime", "price", "airplaneId"];

        if(!helper.checkUndefined(data,keys)){
            throw new Error('Please provide valid data to create a new flight');
        }

        const finaldata = helper.createData(data,keys);
        return finaldata;
        
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    createFlightData
}