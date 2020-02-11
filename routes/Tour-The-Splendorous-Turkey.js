var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var pool = require("./pool");
let table = "Tour-The-Splendorous-Turkey"



router.get("/", (req, res) => {
    res.render(`Tour-The-Splendorous-Turkey`);
});

module.exports = router;
