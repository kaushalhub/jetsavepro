var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "travelogue-guest";

router.get("/", (req, res) => {
    res.render(`travelogue-guest`);
 });
 
router.post("/insert", upload.single("image"), (req, res) => {
    let body = req.body;
    body["image"] = req.file.filename;
    pool.query(`insert into signup set ?`, body, (err, result) => {
        if (err) throw err;
        else res.redirect("/my-profile");
    });
});

router.post('/all', (req, res) => {
    const { username, psw } = req.body
    var query = `select * from signup where username  = "${req.body.username}" and psw = "${req.body.psw}"`;
    pool.query(query, (err, result) => {
        if (err) throw err;
        else if (result[0]) {
            req.session.id = result[0].id;
            
            res.redirect("/my-profile");
            
        }
        else {
            res.redirect('/my-profile');
        }
    })
})

router.get("/allblogarea", (req, res) => {
    const { a } = req.query

    var query = `select * from editblog where blogarea = "${req.query.a}" `
    pool.query(query, (err, result) => {
        if (err) throw err;
        else res.json(result);
    });
});


router.get("/alltypename", (req, res) => {
    const { a } = req.query

    var query = `select * from editblog where typename = "${req.query.b}" and blogarea = "${req.query.a}"`
    pool.query(query, (err, result) => {
        if (err) throw err;
        else res.json(result);
    });
});


router.get("/logout", (req, res) => {

      req.session.id = null
      res.redirect('/');
    });



module.exports = router;

