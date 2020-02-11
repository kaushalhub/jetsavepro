var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "Itineraries-Exotic-And-Romantic-Andaman-Tour";

router.get("/", (req, res) => {
  res.render(`Itineraries-Exotic-And-Romantic-Andaman-Tour`);
});

module.exports = router;
