
var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "A-Splendid-Trip-To-Iceland";

router.get("/", (req, res) => {
    res.render(`A-Splendid-Trip-To-Iceland`);
});

module.exports = router;
