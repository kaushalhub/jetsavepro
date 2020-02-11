var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "formdata";

router.get("/", (req, res) => {
    res.render(`formdata`);
});




router.get("/all", (req, res) => {
    var query = `select * from formdata `;
    pool.query(query, (err, result) => {
        if (err) throw err;
        else res.json(result);
    });
});


module.exports = router;