
var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var pool = require("./pool");
let table = "middle-east-asia";


router.get("/", (req, res) => {
    res.render(`middle-east-asia`);
});

module.exports = router;