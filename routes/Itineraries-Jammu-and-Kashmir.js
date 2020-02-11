var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "Itineraries-Jammu-and-Kashmir";

router.get("/", (req, res) => {
  res.render(`Itineraries-Jammu-and-Kashmir`);
});

module.exports = router;
