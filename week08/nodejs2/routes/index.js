var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var config=require('./db');
//var config=require('./db')
/* 在主页获取新闻时的请求 */
router.get('/', function(req, res, next) {
  var newstype=req.query.newstype;
  var connection=mysql.createConnection(config);
  connection.connect();

  connection.query("SELECT * FROM `baidu` WHERE `newstype`=?",[newstype],function(err,rows,fields){
  	console.log("good");
  	res.json(rows);
});
});
module.exports = router;
// {
//     host:'localhost',
//     port:3306,
//     user:'wanghe',
//     password:'1234',
//     database:'baidunews',
//   }