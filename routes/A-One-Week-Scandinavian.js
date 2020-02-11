
var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "A-One-Week-Scandinavian";

router.get("/", (req, res) => {
    res.render(`A-One-Week-Scandinavian`);
});

module.exports = router;