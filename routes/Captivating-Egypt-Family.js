var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "Captivating-Egypt-Family";

router.get("/", (req, res) => {
    res.render(`Captivating-Egypt-Family`);
});

module.exports = router;
