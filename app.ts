// @ts-check
//* impotar paquetes
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyPaser = require("body-parser");
const apps = express();

//* middlewares
apps.use(cors());
apps.use(morgan("tiny"));
apps.use(bodyPaser.json());
apps.use(express());
apps.use(express.json());
module.exports = apps;
