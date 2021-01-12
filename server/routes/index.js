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
  // var userName = [];
  // var userNo = [];
  // var userPhone = [];
  // var userGender = [];
  // for(var i =0;i<rows.length;i++){
  //   userName += rows[i].Name;
  //   userName += ',';
  //   userNo += rows[i].No;
  //   userPhone += rows[i].Phone;
  //   userGender += rows[i].Gender; 
  // };
  //console.log(userName);
  router.get('/list', (req, res)=>res.json({rows}));
});



connection.end();