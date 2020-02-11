
var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
  let table = "our-themed-packages";

router.get("/", (req, res) => {
  res.render(`our-themed-packages`);
});

module.exports = router;
