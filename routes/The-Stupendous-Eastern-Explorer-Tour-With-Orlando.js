var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "The-Stupendous-Eastern-Explorer-Tour-With-Orlando";

router.get("/", (req, res) => {
    res.render(`The-Stupendous-Eastern-Explorer-Tour-With-Orlando`);
});

module.exports = router;