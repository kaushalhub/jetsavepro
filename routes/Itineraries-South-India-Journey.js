var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "Itineraries-South-India-Journey";

router.get("/", (req, res) => {
  res.render(`Itineraries-South-India-Journey`);
});

module.exports = router;
