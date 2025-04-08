class CrudRepository{

    constructor(model){
        this.model = model;
    }

    async createInstance(data){
        try {
            const response = await this.model.create(data);

            return data;
        } catch (error) {
            throw new Error(`Something went wrong while creating an instance for ${this.model}`);
        }
    }

    async deleteInstance(id){
        try {
            const response = await this.model.destroy({
                where: {
                    id
                }
            });

            return response;
        } catch (error) {
            throw new Error(`Something went wrong while deleting an instance for ${this.model}`);
        }
    }

    async getInstance(id){
        try {
            const response = await this.model.findByPk(id);

            return response;
        } catch (error) {
            throw new Error(`Something went wrong while reading an instance for ${this.model}`);
        }
    }

    async updateInstance(id, data){
        try {
            const response = await this.model.update(
                data,
                {where: {
                    id: id
                }}
            )
        } catch (error) {
            throw new Error(`Something went wrong while updating an instance for ${this.model}`);
        }
    }
}

module.exports = {
    CrudRepository
}