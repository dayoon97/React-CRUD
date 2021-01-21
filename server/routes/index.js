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

router.put('/modify/name', function(req, res){
  let newName = req.params.newName;
  let oldName = req.params.oldName;
  console.log("새로 입력한 이름: ", newName);
  console.log("예전 이름: ", oldName);
});


connection.end();