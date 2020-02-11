var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var pool = require("./pool");
let table = "Tour-the-Splendid-Towns-of-Amsterdam"

router.get("/", (req, res) => {
    res.render(`Tour-the-Splendid-Towns-of-Amsterdam`);
});

module.exports = router;
