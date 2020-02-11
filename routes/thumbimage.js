var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "thumbnail";

router.get("/", (req, res) => {
    res.render(`thumbimage`);
});


router.post("/insert", upload.single("thumbnailimage"), (req, res) => {
    let body = req.body;
    body["thumbnailimage"] = req.file.filename;
    pool.query(`insert into ${table} set ?`, body, (err, result) => {
        if (err) throw err;
        else res.redirect("/bannerimage");
    });
});


module.exports = router;