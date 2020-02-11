var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "family-tour-packages";

router.get("/", (req, res) => {
  res.render(`family-tour-packages`);
});

module.exports = router;
