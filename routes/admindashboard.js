var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var pool = require("./pool");
let table = "admindashboard";

router.get("/", (req, res) => {
  res.render(`admindashboard`);
});


router.get("/all", (req, res) => {
  var query = `select e.*, (select s.name from signup s where s.id = e.userid) from editblog e `
  pool.query(query, (err, result) => {
    if (err) throw err;
    else res.json(result);
  });
});

module.exports = router;
