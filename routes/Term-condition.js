var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "Term-condition";

router.get("/", (req, res) => {
    res.render(`Term-condition`);
});

module.exports = router;