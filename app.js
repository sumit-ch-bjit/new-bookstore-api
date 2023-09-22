const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const configRoutes = require('./routes')
const chalk = require('chalk');
const connectDB = require("./config/db");

dotenv.config()

connectDB()

const port = 3000

app.use(cors());
app.use(bodyParser.json());

configRoutes(app)


app.listen(port, () => {
    console.log(
        `${chalk.bold.yellow.bgMagenta(
            "server running on port"
        )} ${chalk.bold.bgRed(port)}`
    );
})