
var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "A-Trip-To-The-Wildlife-Hub-South-Africa";

router.get("/", (req, res) => {
    res.render(`A-Trip-To-The-Wildlife-Hub-South-Africa`);
});

module.exports = router;
