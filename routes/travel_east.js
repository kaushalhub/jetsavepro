var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "travel_east";

router.get("/", (req, res) => {
  res.render(`travel_east`);
});


module.exports = router;