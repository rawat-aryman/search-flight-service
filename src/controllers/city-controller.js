const { CityService } = require('../services/index');
const { success_codes, server_errors, client_side_errors } = require('../utils/error-codes');
const { returnResponse } = require('../utils/response-format');

const cityService = new CityService();

const createCity = async (req,res,next) => {
    try {
        const data = req.body;
        const city = await cityService.addInstanceService(data);

        if(city === null){
            console.log("Cannot create city");
            throw new Error("Cannot create city");
        }

        console.log("City created successfully");
        console.log(city);
        return res.status(success_codes.created).json(returnResponse(1,city,'City created successfully'));
        
    } catch (error) {
        console.log("Something went wrong while creating cities");
        return res.status(server_errors.internal_server_error).json(returnResponse(0,error.message,'Something went wrong while creating Cty -- city controller'));
    }
}

const deleteCity = async (req,res,next) => {
    try {
        const id = req.params.id;
        const response = await cityService.deleteInstanceService(id);

        if(response === false){
            console.log("Cannot delete city");
            throw new Error("Cannot delete city");
        }

        console.log("City deleted successfully with id " + id);
        
        return res.status(success_codes.ok).json(returnResponse(1,response,'City deleted successfully'));
    } catch (error) {
        console.log("Something went wrong while deleting cities");
        return res.status(server_errors.internal_server_error).json(returnResponse(0,error.message,'Something went wrong while deleting Cty -- city controller'));
    }
}

const getCity = async (req,res,next) => {
    try {
        const id = req.params.id;
        const response = await cityService.getInstanceService(id);

        if(response === null){
            console.log("Cannot get city");
            throw new Error("Cannot get city");
        }

        console.log("City returned successfully with id " + id);
        return res.status(success_codes.ok).json(returnResponse(1,response,'City returned successfully'));
        
    } catch (error) {
        console.log("Something went wrong while getting cities");
        return res.status(server_errors.internal_server_error).json(returnResponse(0,error.message,'Something went wrong while returning Cty -- city controller'));
    }
}

const updateCity = async (req,res,next) => {
    try {
        const data = req.body;
        const id = req.params.id;
        const response = await cityService.updateInstanceService(id,data);

        if(response === null){
            console.log("Cannot update city");
            throw new Error("Cannot update city");
        }

        console.log("City updated successfully with id " + id);
        return res.status(success_codes.ok).json(returnResponse(1,response,'City updated successfully'));
        
    } catch (error) {
        console.log("Something went wrong while updating cities");
        return res.status(server_errors.internal_server_error).json(returnResponse(0,error.message,'Something went wrong while updating Cty -- city controller'));
    }
}

const getAllCity = async (req, res, next) => {
    try {
        const response = await cityService.getAllCity();

        if(response === null){
            response = "No cities to return";
        }

        return res.status(success_codes.ok).json(returnResponse(1,response,'All Cities returned successfully'));
    } catch (error) {
        console.log("Something went wrong while returning all cities");
        return res.status(server_errors.internal_server_error).json(returnResponse(0,error.message,'Something went wrong while returning all Cities -- city controller'));
    }
}

const searchCity = async(req,res,next) => {
    try {
        const query = req.query.name;
        const response = await cityService.searchCity(query);

        if(response === null){
            response = `No city found starting with the string: ${query}`;
            console.log(response);
        }

        return res.status(success_codes.ok).json(returnResponse(1,response,'City matching returned successfully'));
    } catch (error) {
        console.log("Something went wrong in the city controller searchCity fn");
        return rres.status(server_errors.internal_server_error).json(returnResponse(0,error.message,'Something went wrong while searching Cty -- city controller'));
    }
}

module.exports = {
    createCity,
    deleteCity,
    getCity,
    updateCity,
    getAllCity,
    searchCity
}