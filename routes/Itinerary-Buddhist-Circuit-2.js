var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var pool = require("./pool");
let table = "Itinerary-Buddhist-Circuit-2";

router.get("/", (req, res) => {
    res.render(`Itinerary-Buddhist-Circuit-2`);
});

module.exports = router;
