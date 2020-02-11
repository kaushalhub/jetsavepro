var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
var gmail = require
let table = "addcontent4";


router.get("/", (req, res) => {
  res.render(`addcontent4`);
});

router.post("/insert", upload.single("day4image"), (req, res) => {
  let body = req.body;
  body["day4image"] = req.file.filename;
  pool.query(`insert into ${table} set ?`, body, (err, result) => {
    if (err) throw err;
    else res.redirect("/addcontent4");
  });
});

router.get("/all", (req, res) => {
  var query = `select * from addcontent4 `;
  pool.query(query, (err, result) => {
    if (err) throw err;
    else res.json(result);
  });
});

router.get("/delete", (req, res) => {
  const { id } = req.query;
  pool.query(`delete from addcontent4 where id = ${id}`, (err, result) => {
    if (err) throw err;
    else res.redirect("/addcontent4");
  });
});

router.get("/update", (req,res) => {
    const { id } = req.query;
    pool.query(`update from addcontant4 where image = ${item.image}`, (err, result) => {
      if(err) throw err;
      else res.redirect("/editblog");
    })
  })
router.get("/update", (req, res) => {
      const {id} = req.body;
      pool.query(`update from addcontent4 where id = {id}`,)


} )

module.exports = router;
