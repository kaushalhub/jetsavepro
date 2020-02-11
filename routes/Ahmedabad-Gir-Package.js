
var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var pool = require("./pool");
let table = "Ahmedabad-Gir-Package";

router.get("/", (req, res) => {
    res.render(`Ahmedabad-Gir-Package`);
});

module.exports = router;
