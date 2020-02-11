var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "editform";

router.get("/", (req, res) => {
    if(req.session.id){
        console.log(req.session.id)
    var query = `select * from signup where id = '${req.session.id}'`
    pool.query(query, (err, result) => {
        if(err) throw err;
      //else  res.json(result)
        else res.render(`editform`, {result: result});
    })  

    //res.render(`editform`);
}
else{
    res.send('not found')
}
});



router.post('/update', (req, res) => {
    let body = req.body
    console.log(req.body)

    pool.query(`update signup  SET name = '${body.name}', username = '${body.username}', email = '${body.email}', bio = '${body.bio}' where id = '${req.session.id}'`, [req.body], (err, result) => {
        if (err) throw err;
        else res.redirect('/myprofile')
    })
})


router.post('/updateimage',upload.single('image'), (req, res) => {
    let body = req.body
    body['image'] = req.file.filename

    pool.query(`update signup  SET image = '${body.image}'   where id = '${req.session.id}'`, [req.body], (err, result) => {
        if (err) throw err;
        else res.redirect('/myprofile');
    })
})


// router.post('/update',(req,res)=>{
//     let body = req.body
//     pool.query = `update signup where id = '${req.session.id}'`
//     console.log(req.body)
// })

module.exports = router;