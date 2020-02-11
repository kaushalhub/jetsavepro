

var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
  let table = "solo-tour-packages";

router.get("/", (req, res) => {
  res.render(`solo-tour-packages`);
});

module.exports = router;
