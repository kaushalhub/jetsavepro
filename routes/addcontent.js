var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "addcontent";

router.get("/", (req, res) => {
    res.render(`addcontent`);
});


router.post("/insert", upload.single("day1image"), (req, res) => {
  let body = req.body;
  body["day1image"] = req.file.filename;
  pool.query(`insert into ${table} set ?`, body, (err, result) => {
    if (err) throw err;
    else res.redirect("/addcontent");
  });
});

router.get("/all", (req, res) => {
  var query = `select * from addcontent `;
  pool.query(query, (err, result) => {
    if (err) throw err;
    else res.json(result);
  });
});

router.get("/delete", (req, res) => {
  const { id } = req.query;
  pool.query(`delete from addcontent where id = ${id}`, (err, result) => {
    if (err) throw err;
    else res.redirect("/addcontent");
  });
});

module.exports = router;
