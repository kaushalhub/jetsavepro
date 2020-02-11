var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "Central-Highlight";

router.get("/", (req, res) => {
    res.render(`Central-Highlight`);
});

module.exports = router;