
var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "Idyllic-Honeymoon-Package-For-Maldives";

router.get("/", (req, res) => {
    res.render(`Idyllic-Honeymoon-Package-For-Maldives`);
});

module.exports = router;
