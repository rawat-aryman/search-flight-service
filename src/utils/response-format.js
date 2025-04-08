const returnResponse = (idf, response, message) => {

    // 0 ---> failed, passed err.message
    if(idf === 0){
        return {
            data: {},
            success: false,
            message,
            error: response
        };
    }

    return {
        data: response,
        success: true,
        message,
        error: {}
    }
};

module.exports = {
    returnResponse
}