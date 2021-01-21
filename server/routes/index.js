const { urlencoded } = require('body-parser');
const express = require('express');
const router = express.Router();

module.exports = router;

const mysql      = require('mysql');
const { connect } = require('./users');
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

connection.end();

