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

let newName = '';
let oldName = '';


router.put('/modify/name', function(req, res){
  newName = req.body.newName;
  oldName = req.body.oldName;
  connection.query('update node_db.`member` set Name = ' + connection.escape(newName) +  'where Name =' + connection.escape(oldName), (error, rows, fields) => {
    if(error){
      console.log("error: ", error);
      res.status(500).send('Internal Server Error222');
    } else {
      console.log("success!");
      res.json(rows.changedRows);
      console.log(rows.changedRows);
    }
  });
});

