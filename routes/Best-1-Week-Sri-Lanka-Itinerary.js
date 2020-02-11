
var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "Best-1-Week-Sri-Lanka-Itinerary";

router.get("/", (req, res) => {
    res.render(`Best-1-Week-Sri-Lanka-Itinerary`);
});

module.exports = router;
