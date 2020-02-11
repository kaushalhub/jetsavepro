var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "Itineraries";


router.get("/", (req, res) => {
  res.render(`Itineraries`);
});



router.get('/search',(req,res)=>{
  const {id} = req.query
  console.log(req.query.id  )
  var query = `select * from  thumbnail where city = "${id}"; `
  var query1 = `select * from quick where city = "${id}"; `
  var query2   = `select * from maps where city = "${id}"; `
  var query3 = `select * from highlight where city = "${id}"; `
  var query4 = `select * from lesiure where city = "${id}"; `
  var query5 = `select * from advanture where city = "${id}"; `
  var query6 = `select * from vistask where city = "${id}"; `
  pool.query(query+query1+query2+query3+query4+query5+query6,(err,result)=>{  
    err ? console.log(err) : res.render(`Itineraries`,{result:result})
  })
})


router.post('/bookmark',(req,res)=>{
  let body = req.body;
  body['userid'] = req.session.id
  pool.query(`insert into bookmark set ?`,body,(err,result)=>{
    err ? console.log(err) : res.json(result)
  })

})


// router.get('/', (req, res) => {
//  // var query = `select * from itineraies;`
//  // var query1 = `select * from daydetail;`
// //  pool.query(query + query1, (err, result) => {
//    // if (err) throw err;
//   //  else {
//       res.render(`itineraries`, { result: result });

//    // }
//   })
// //})

module.exports = router;
