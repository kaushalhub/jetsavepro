
var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "South-East-Asia";

router.get("/", (req, res) => {
    res.render(`South-East-Asia`);
});

module.exports = router;
