var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "Itineraries-London-Switzerland-and-Paris";

router.get("/", (req, res) => {
    res.render(`Itineraries-London-Switzerland-and-Paris`);
});


module.exports = router;