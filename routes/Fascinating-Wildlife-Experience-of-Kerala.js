
var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var pool = require("./pool");
let table = "Fascinating-Wildlife-Experience-of-Kerala";

router.get("/", (req, res) => {
    res.render(`Fascinating-Wildlife-Experience-of-Kerala`);
});

module.exports = router;
