var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "beautiful-honeymoon-resorts-in-maldives";

router.get("/", (req, res) => {
    res.render(`beautiful-honeymoon-resorts-in-maldives`);
});

module.exports = router;