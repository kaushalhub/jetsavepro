
var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "Tour-the-Epic-Land-of-Spain";

router.get("/", (req, res) => {
    res.render(`Tour-the-Epic-Land-of-Spain`);
});

module.exports = router;