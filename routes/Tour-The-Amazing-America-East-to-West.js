
var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "Tour-The-Amazing-America-East-to-West";

router.get("/", (req, res) => {
    res.render(`Tour-The-Amazing-America-East-to-West`);
});

module.exports = router;
