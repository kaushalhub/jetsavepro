var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "The-Ultimate-Vietnam-Itinerary";

router.get("/", (req, res) => {
    res.render(`The-Ultimate-Vietnam-Itinerary`);
});

module.exports = router;
