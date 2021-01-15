const express = require('express');
const router = express.Router();

// router.get('/', (req, res)=>res.json({username:'bryan~~~'}));
// router.get('/group', (req, res)=>res.json({username:'dev group. bryan'}));

module.exports = router;

const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'dbghtmxm1!',
  database : 'Node_db',
  port: 3306
});

connection.connect();

connection.query('SELECT * from Node_db.member', (error, rows, fields) => {
  if (error) throw error;
  router.get('/list', (req, res)=>res.json({rows}));
});

// connection.query('update node_db.`member` set Name = ? where Name = ? and Phone = ?', [newName, name, phone], (error, rows, fields) => {
//   if (error) throw error;
//   router.put('/name/:newName/:name/:phone', function(req, res){
// });


router.put('/name/', function(req, res){
    //let name = req.params.Name;
    //let newName = req.params.newName;
    //let phone = req.params.phone;
  
    console.log(req.params.newName);
  connection.query('update node_db.`member` set Name = ? where Name = ? and Phone = ?', [req.params.newName, req.params.name, req.params.phone], (error, rows, fields) => {
    if (error) throw error;
    console.log("성공");
      //res.render()
  });
});



// connection.query('update node_db.`member` set Name = ? where Name = ? and Phone = ?', [req.params.newName, req.params.name, req.params.phone], (error, rows, fields) => {
//   console.log("연결");
//   //router.post('/name', (req, res) => const newName);
//   if (error) throw error;
//   router.put('/name/:newName/:name/:phone', function(req, res){
//       console.log("ㅇㅋㅎㅇㅎㅋ");
//   });
//  });



connection.end();