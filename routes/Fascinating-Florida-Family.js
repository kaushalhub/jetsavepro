
var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "Fascinating-Florida-Family";

router.get("/", (req, res) => {
    res.render(`Fascinating-Florida-Family`);
});

module.exports = router;