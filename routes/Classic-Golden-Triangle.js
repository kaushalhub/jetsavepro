

var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "Classic-Golden-Triangle";

router.get("/", (req, res) => {
    res.render(`Classic-Golden-Triangle`);
});

module.exports = router;