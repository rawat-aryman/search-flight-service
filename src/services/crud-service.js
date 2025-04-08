const { repository } = require("../repository/crud-repository");

class CrudService{
    constructor(repository){
        this.repository = repository;
    }

    async getInstanceService(id){
        try {
            console.log(this.repository);
            console.log(this.repository.getInstance);
            const initialResponse = await this.repository.getInstance(id);

            return initialResponse;
        } catch (error) {
            console.log(`Something went wrong with service GET model: ${this.model}`);
            throw new Error(error);
        }
    }

    async addInstanceService(data){
        try {
            const response = await this.repository.createInstance(data);

            console.log(`Instance added successfully model: ${this.model}`);
            return response;
        } catch (error) {
            console.log(`Something went wrong with service POST model: ${this.model}`);
            throw new Error(error);
        }
    }

    async deleteInstanceService(id){
        try {
            const response = await this.repository.deleteInstance(id);

            console.log(`Instance deleted successfully ${this.model}`);
            return response;
        } catch (error) {
            console.log(`Something went wrong with service DELETE model: ${this.model}`);
            throw new Error(error);
        }
    }

    async updateInstanceService(id, data){
        try {
            const response = await this.repository.updateInstance(id,data);

            console.log(`Instance updated successfully ${this.model}`);
            return response;
        } catch (error) {
            console.log(`Something went wrong with service UPDATE model: ${this.model}`);
            throw new Error(error);
        }
    }
}

module.exports = {
    CrudService
}