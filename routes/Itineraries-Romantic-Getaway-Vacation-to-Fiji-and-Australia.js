var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "Itineraries-Romantic-Getaway-Vacation-to-Fiji-and-Australia";

router.get("/", (req, res) => {
  res.render(`Itineraries-Romantic-Getaway-Vacation-to-Fiji-and-Australia`);
});

module.exports = router;
