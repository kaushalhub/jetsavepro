var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "wildlife-tour-packages";

router.get("/", (req, res) => {
  res.render(`wildlife-tour-packages`);
});

module.exports = router;
