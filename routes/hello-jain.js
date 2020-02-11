var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "hello-jain";

router.get("", (req, res) => {
    res.render(`hello-jain`);
});


module.exports = router;