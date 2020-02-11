var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "allusers";

router.get("/", (req, res) => {
    res.render(`allusers`);
});


router.get("/insert", (req, res) => {
  const {name,username,email,phone} = req.query;
  let query = req.query
  console.log(query)
  pool.query(`insert into verifieduser set ?`, query, (err, result) => {
    if (err) throw err;
    else res.redirect("allusers");
  });
});


router.get("/all", (req, res) => {
  var query = `select * from signup `;
  pool.query(query, (err, result) => {
    if (err) throw err;
    else res.json(result);
  });
});


module.exports = router;
