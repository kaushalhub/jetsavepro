    var express = require("express");
    var mysql = require("mysql");
    var router = express.Router();
    var pool = require("./pool");
    let table = "about-jetsave";

    router.get("/", (req, res) => {
        res.render(`about-jetsave`);
    });

    module.exports = router;
    