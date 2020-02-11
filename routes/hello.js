var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");

let table = "hello";


// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'public/images/')
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + path.extname(file.originalname))
//     }
// })


// var upload = multer({ storage: storage });
// {name = 'image1'}
// { name = 'image2' }
// { name = 'image3' }

// module.exports = upload;

router.get("/", (req, res) => {
    
    pool.query(`select * from thumbnail`, (err, result) => {
        if (err) throw err
        else {
            res.render(`hello`, { result: result });
        }
    })
});


router.post("/insert", upload.fields([{ name: 'thumbnail', maxCount: 1 }, { name: 'banner', maxCount: 1 }, { name: 'mapimage', maxCount: 1 }]),  (req, res) => {
    let body = req.body;
    body["thumbnail"] = req.files['thumbnail'][0].filename;
    body["banner"] = req.files['banner'][0].filename;
    body["mapimage"] = req.files['mapimage'][0].filename
    pool.query(`insert into thumbnail set ?`, body, (err, result) => {
        if (err) throw err; 
        else res.redirect("/hello");
    });
});

router.post("/insert1", (req, res) => {
    let body = req.body;
    pool.query(`insert into quick set ?`, body, (err, result) => {
        if (err) throw err;
        else res.redirect("/hello");
    });
});

router.post("/insert2", (req, res) => {
    let body = req.body;
    pool.query(`insert into maps set ?`, body, (err, result) => {
        if (err) throw err;
        else res.redirect("/hello");
    });
});

router.post("/insert3", (req, res) => {
    let body = req.body;
    pool.query(`insert into highlight set ?`, body, (err, result) => {
        if (err) throw err;
        else res.redirect("/hello");
    });
});

router.post("/insert4", (req, res) => {
    let body = req.body;
    pool.query(`insert into lesiure set ?`, body, (err, result) => {
        if (err) throw err;
        else res.redirect("/hello");
    });
});

router.post("/insert5", (req, res) => {
    let body = req.body;
    pool.query(`insert into advanture set ?`, body, (err, result) => {
        if (err) throw err;
        else res.redirect("/hello");
    });
});

router.post("/insert6", (req, res) => {
    let body = req.body;
    pool.query(`insert into vistask set ?`, body, (err, result) => {
        if (err) throw err;
        else res.redirect("/hello");
    });
});


router.get('/thumbnail',(req,res)=>{
    const {name} =  req.query
    console.log('thumbnail',req.query.name)
    pool.query(`select * from thumbnail where city = "${name}" `,(err,result)=>
        err ? console.log(err) : res.json(result))
})


// router.post("/insert1", upload.single("image2"), (req, res) => {
//     let body = req.body;
//     body['image1id'] = image1id;
//     body["image2"] = req.file.filename;
//     pool.query(`insert into hello1 set ?`, body, (err, result) => {
//         if (err) throw err;
//         else res.redirect("/hello");
//     });
// });


module.exports = router;