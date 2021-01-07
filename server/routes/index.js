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
  for(var i =0;i<rows.length;i++){
    var userName = rows[i].Name;
    console.log(rows[i].Name);
    console.log(userName);
    //return {userName: rows[i].Name}
    router.get('/list', (req, res)=>res.json({rows}));
  };
});



connection.end();