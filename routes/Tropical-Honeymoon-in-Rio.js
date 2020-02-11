
var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "Tropical-Honeymoon-in-Rio";

router.get("/", (req, res) => {
    res.render(`Tropical-Honeymoon-in-Rio`);
});

module.exports = router;