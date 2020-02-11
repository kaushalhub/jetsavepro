
var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var pool = require("./pool");
let table = "Explore-the-Wilderness-in-Ranthambhore-National-Park";

router.get("/", (req, res) => {
    res.render(`Explore-the-Wilderness-in-Ranthambhore-National-Park`);
});

module.exports = router;
