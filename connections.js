// @ts-check
var mysql = require("mysql");
var connections = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "conmedi",
    port: 3307
});
module.exports = connections;
