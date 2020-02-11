var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "Itineraries-Astounding-Dubai-Honeymoon-Package";

router.get("/", (req, res) => {
  res.render(`Itineraries-Astounding-Dubai-Honeymoon-Package`);
});

module.exports = router;
