const express = require("express");
const { CityRepository } = require('./repository/city-repository');
const { PORT } = require("./config/db");
const router = require('./routes/index');
const bodyParser = require("body-parser");


const setupAndStartServer = () => {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    app.use('/api', router)
    // console.log(cityController.createCity({name: "Ahemdabad"}));
    app.listen(3000, () => {
        console.log(`Server is listening at ${PORT}`);
    })
}


setupAndStartServer();