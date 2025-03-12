class Helper{

    checkUndefined(data,keys){
        try {
            if(data == {}){
                throw new Error('Please provide valid data');
            }

            if(Array.isArray(keys) === false || keys == []){
                throw new Error('Invalid keys');
            }

            keys.map((key) => {
                if(data[key] === undefined) return false;
            })

            return true;
        } catch (error) {
            throw new Error(error);
        }
    }

    createData(data,keys){
        if(data == {}){
            throw new Error('Please provide valid data');
        }

        if(Array.isArray(keys) === false || keys == []){
            throw new Error('Invalid keys');
        }

        const finalData = {};

        keys.map((key) => {
            finalData[key] = data[key];
        })

        return finalData;
    }
}

module.exports = {
    Helper
}