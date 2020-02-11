
var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "south-america";

router.get("/", (req, res) => {
    res.render(`south-america`);
});

module.exports = router;
