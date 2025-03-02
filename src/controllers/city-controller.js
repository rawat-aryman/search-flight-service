const { CityService } = require('../services/index');

const cityService = new CityService();

const createCity = async (req,res,next) => {
    try {
        const data = req.body;
        const city = await cityService.createCity(data);

        if(city === null){
            console.log("Cannot create city");
            throw new Error("Cannot create city");
        }

        console.log("City created successfully");
        console.log(city);
        return res.status(201).json({
            data: city,
            success: true,
            message: "City created successfully",
            err: {}
        });
        
    } catch (error) {
        console.log("Something went wrong while creating cities");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Cannot create city",
            err: error.message
        });
    }
}

const deleteCity = async (req,res,next) => {
    try {
        const id = req.params.id;
        const response = await cityService.deleteCity(id);

        if(response === false){
            console.log("Cannot delete city");
            throw new Error("Cannot delete city");
        }

        console.log("City deleted successfully with id " + id);
        
        return res.status(200).json({
            data: response,
            success: true,
            message: `City with id: ${id} successfully`,
            err: {}
        });
    } catch (error) {
        console.log("Something went wrong while deleting cities");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Cannot delete city",
            err: error.message
        });
    }
}

const getCity = async (req,res,next) => {
    try {
        const id = req.params.id;
        const response = await cityService.getCity(id);

        if(response === null){
            console.log("Cannot get city");
            throw new Error("Cannot get city");
        }

        console.log("City returned successfully with id " + id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "City returned successfully",
            err: {}
        });
        
    } catch (error) {
        console.log("Something went wrong while getting cities");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Cannot get city",
            err: error.message
        });
    }
}

const updateCity = async (req,res,next) => {
    try {
        const data = req.body;
        const id = req.params.id;
        const response = await cityService.updateCity(id,data);

        if(response === null){
            console.log("Cannot update city");
            throw new Error("Cannot update city");
        }

        console.log("City updated successfully with id " + id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "City updated successfully",
            err: {}
        });
        
    } catch (error) {
        console.log("Something went wrong while updating cities");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Cannot update city",
            err: error.message
        });
    }
}

const getAllCity = async (req, res, next) => {
    try {
        const response = await cityService.getAllCity();

        if(response === null){
            response = "No cities to return";
        }

        return res.status(200).json({
            data: response,
            success: true,
            message: "Cities returned successfully",
            err: {}
        });
    } catch (error) {
        console.log("Something went wrong while returning all cities");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Cannot return all city",
            err: error.message
        });
    }
}

module.exports = {
    createCity,
    deleteCity,
    getCity,
    updateCity,
    getAllCity
}