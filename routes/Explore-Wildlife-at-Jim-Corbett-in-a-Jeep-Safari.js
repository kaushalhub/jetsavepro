
var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var pool = require("./pool");
let table = "Explore-Wildlife-at-Jim-Corbett-in-a-Jeep-Safari";

router.get("/", (req, res) => {
    res.render(`Explore-Wildlife-at-Jim-Corbett-in-a-Jeep-Safari`);
});

module.exports = router;
