const express = require("express");
const { PORT } = require("./config/config");

const setupAndStartServer = () => {

    const app = express();

    app.listen(3000, () => {
        console.log(`Server is listening at ${PORT}`);
    })
}


setupAndStartServer();