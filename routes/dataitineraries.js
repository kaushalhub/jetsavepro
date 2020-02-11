var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "dataitineraries";

router.get("/", (req, res) => {
    res.render(`dataitineraries`);
});


router.post("/insert", upload.single("image"), (req, res) => {
    let body = req.body;
    body["image"] = req.file.filename;
    pool.query(`insert into itineraies set ?`, body, (err, result) => {
        if (err) throw err;
        else res.redirect("dataitineraries");
    });
});

module.exports = router;
