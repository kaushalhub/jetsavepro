var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "our-destination";

router.get("/", (req, res) => {
  res.render(`our-destination`);
});

module.exports = router;