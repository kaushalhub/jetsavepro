var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "north-america";

router.get("/", (req, res) => {
  res.render(`north-america`);
});

module.exports = router;