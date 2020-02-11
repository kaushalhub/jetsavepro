var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "United-Kingdom-and-Scotland";

router.get("/", (req, res) => {
    res.render(`United-Kingdom-and-Scotland`);
});

module.exports = router;
