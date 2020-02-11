var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "travel_south";

router.get("/", (req, res) => {
    res.render(`travel_south`);
});


module.exports = router;