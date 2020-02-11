var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "The-Remarkable-Western-Wanderer-Tour";

router.get("/", (req, res) => {
    res.render(`The-Remarkable-Western-Wanderer-Tour`);
});

module.exports = router;
    