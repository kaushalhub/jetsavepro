var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "success";

router.get("/", (req, res) => {
    res.render(`success`);
});

module.exports = router;
