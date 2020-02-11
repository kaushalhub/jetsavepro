var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "Soothing-Munnar-and-Alleppey-Honeymoon";

router.get("/", (req, res) => {
    res.render(`Soothing-Munnar-and-Alleppey-Honeymoon`);
});

module.exports = router;
