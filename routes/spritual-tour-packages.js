
var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "spritual-tour-packages";

router.get("/", (req, res) => {
    res.render(`spritual-tour-packages`);
});

module.exports = router;
