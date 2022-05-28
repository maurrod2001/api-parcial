//* impotar paquetes
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyPaser = require("body-parser")
const app = express();


//* middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyPaser.json());
app.use(express.json())
module.exports = app