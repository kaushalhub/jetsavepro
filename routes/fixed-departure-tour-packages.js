
var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "fixed-departure-tour-packages";

router.get("/", (req, res) => {
  res.render(`fixed-departure-tour-packages`);
});

module.exports = router;
