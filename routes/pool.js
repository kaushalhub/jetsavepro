var mysql = require('mysql')

const pool = mysql.createPool({

//  host: "157.245.111.167",
  host: "localhost",
  user: "root",
  password: "123",
  database: "jetsave",
  port: "3306",
  connectionLimit: 100,
  multipleStatements: true
});

module.exports = pool;