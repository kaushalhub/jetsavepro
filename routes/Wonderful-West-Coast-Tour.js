var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "Wonderful-West-Coast-Tour";

router.get("/", (req, res) => {
    res.render(`Wonderful-West-Coast-Tour`);
});

module.exports = router;
