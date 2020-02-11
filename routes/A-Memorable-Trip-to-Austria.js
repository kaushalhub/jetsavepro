
var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "A-Memorable-Trip-to-Austria";

router.get("/", (req, res) => {
    res.render(`A-Memorable-Trip-to-Austria`);
});

module.exports = router;
