var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "Impeccable-Tour-of-Ladakh";

router.get("/", (req, res) => {
    res.render(`Impeccable-Tour-of-Ladakh`);
});

module.exports = router;
