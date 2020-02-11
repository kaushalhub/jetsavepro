var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "editblog";

router.get("/", (req, res) => {
    if (req.session.id) {

      
        var query = `select name,image,username from signup where id = "${req.session.id}"; `
       
        pool.query(query, (err, result) => {
            if (err) throw err;
            else res.render(`edittravelogue`, { result: result });
            // else res.json(result)
            console.log(result)
        })
    }
    else {
        res.redirect('/login')
    }
});

// router.post("/insert", upload.single("blogimage"), (req,res) => {
//     let body = req.body;
    
//     body["blogimage"] = req.file.filename;
//     body['userid'] = req.session.id;
//     console.log(req.body);
//     pool.query(`insert into editblog set ?`,body,(err,result)=>{
//         if (err) throw err;
//         else res.redirect("/edittravelogue");
//     });
// });



router.post("/insert", upload.fields([{ name: 'blogimage', maxCount: 1 }, { name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 1 }, { name: 'image3', maxCount: 1 }, { name: 'image4', maxCount: 1 }, { name: 'image5', maxCount: 1 }]), (req, res) => {
    let body = req.body;
    body['userid'] = req.session.id;
    body["blogimage"] = req.files['blogimage'][0].filename;
    body["image1"] = req.files['image1'][0].filename;
    body["image2"] = req.files['image2'][0].filename;
    body["image3"] = req.files['image3'][0].filename;
    body["image4"] = req.files['image4'][0].filename;
    body["image5"] = req.files['image5'][0].filename;
    
    pool.query(`insert into editblog set ?`, body, (err, result) => {
        if (err) throw err;
        else res.redirect("/edittravelogue");
    });
});



// router.post("/insert", upload.single("blogimage"), (req, res) => {
  //  let body = req.body;
   // body["blogimage"] = req.file.filename;
   // pool.query(`insert into ${table} set ?`, body, (err, result) => {
    //    if (err) throw err;
     //   else res.redirect("/editblog");
   // });
// });


router.get("/all", (req, res) => {
    var query = `select * from editblog`;
    pool.query(query, (err, result) => {
        if (err) throw err;
        else res.json(result);
    });
});

// router.get("/allblog", (req, res) =>

//     pool.query(`SELECT * FROM editblog where userid = "${req.session.id}"`, (err, result) =>
//         err ? console.log(err) : res.json(result)
//     )
// );

module.exports = router;