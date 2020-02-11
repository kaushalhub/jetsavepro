var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "Itineraries-Exotic-Singapore-Package-with-Sentosa-Island";

router.get("/", (req, res) => {
  res.render(`Itineraries-Exotic-Singapore-Package-with-Sentosa-Island`);
});

module.exports = router;
