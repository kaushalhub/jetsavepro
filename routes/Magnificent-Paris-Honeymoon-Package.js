
var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var pool = require("./pool");
let table = "Magnificent-Paris-Honeymoon-Package";


router.get("/", (req, res) => {
    res.render(`Magnificent-Paris-Honeymoon-Package`);
});



module.exports = router;