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

//router.get('/modify/name');

connection.connect();

// connection.query('update node_db.`member` set Name = ? where Name = ? and Phone = ?', [req.params.newName, req.params.name, req.params.phone], (error, rows, fields) => {
//         if (error) throw error;
//         console.log("성공");
//         router.put('/name', (req, res)=>res.json({rows}));
//       });

router.put('/name', function(req, res) {
    //let name = req.params.Name;
    let newName = req.params.newName;
    let oldName = req.params.oldName;
    //let phone = req.params.phone;
  
    console.log(newName);
    console.log(oldName);
//   connection.query('update node_db.`member` set Name = ? where Name = ? and Phone = ?', [req.params.newName, req.params.name, req.params.phone], (error, rows, fields) => {
//     if (error) throw error;
//     console.log("성공");
//       //res.render()
//   });
});


connection.end();