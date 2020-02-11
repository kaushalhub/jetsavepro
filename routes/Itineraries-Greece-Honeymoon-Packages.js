var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "Itineraries-Greece-Honeymoon-Packages";

router.get("/", (req, res) => {
  res.render(`Itineraries-Greece-Honeymoon-Packages`);
});

module.exports = router;
