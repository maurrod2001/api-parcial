// @ts-check
const mysql = require("mysql");
const connections = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "conmedi",
    port: 3307,
  });

module.exports = connections