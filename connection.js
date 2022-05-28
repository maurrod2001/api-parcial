const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "conmedi",
    port: 3307,
  });

module.exports = connection