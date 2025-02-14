const express = require("express");
const { PORT } = require("./config/db");
const bodyParser = require("body-parser")



const setupAndStartServer = () => {

    const app = express();

    app.use(bodyParser);
    app.use(bodyParser.urlencoded({extended : true}));

    app.listen(3000, () => {
        console.log(`Server is listening at ${PORT}`);
    })
}


setupAndStartServer();