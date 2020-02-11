var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var pool = require("./pool");
let table = "Krabi-Phuket-Honeymoon-Package";

router.get("/", (req, res) => {
    res.render(`Krabi-Phuket-Honeymoon-Package`);
});

module.exports = router;
