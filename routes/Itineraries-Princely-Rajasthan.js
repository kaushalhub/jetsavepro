var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "Itineraries-Princely-Rajasthan";

router.get("/", (req, res) => {
  res.render(`Itineraries-Princely-Rajasthan`);
});

module.exports = router;
