// @ts-check
//* impotar paquetes
var express = require("express");
var morgan = require("morgan");
var cors = require("cors");
var bodyPaser = require("body-parser");
var apps = express();
//* middlewares
apps.use(cors());
apps.use(morgan("tiny"));
apps.use(bodyPaser.json());
apps.use(express());
apps.use(express.json());
module.exports = apps;
