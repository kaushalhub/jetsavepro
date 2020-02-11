var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "The-Enlightening-Buddha-Circuit-Tour";

router.get("/", (req, res) => {
    res.render(`The-Enlightening-Buddha-Circuit-Tour`);
});

module.exports = router;