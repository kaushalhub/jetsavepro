
var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "A-Relaxed-Week-in-Goa";

router.get("/", (req, res) => {
    res.render(`A-Relaxed-Week-in-Goa`);
});

module.exports = router;
