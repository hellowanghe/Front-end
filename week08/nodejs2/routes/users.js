var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config=require('./db');
var connection = mysql.createPool(config);
    /* GET users listing. */
    // 后台请求新闻
router.get('/getnews', function(req, res, next) {
    connection.query("SELECT * FROM `baidu` ORDER BY `newsid` DESC", function(err, rows, fields) {
        console.log("good");
        res.json(rows);
    });
});
// 后台更新新闻；
router.post('/update', function(req, res) {
	var newsid=req.body.id,
	 newstype=req.body.newstype,
	 newstitle=req.body.newstitle,
	 newsimg=req.body.newsimg,
	 newstime=req.body.newstime,
	 newssrc=req.body.newssrc;
    connection.query("update `baidu` set `newstitle`=?, `newstype`=?, `newsimg`=?, `newstime`=?, `newssrc`=? where `newsid`=?",[newstitle,newstype,newsimg,newstime,newssrc,newsid], function(err, rows, fields) {
        console.log("rows.changedRows");
        res.json(rows);
    });
});
//后台新闻更新结束

// 模态框取值
router.get('/curr', function(req, res, next) {
	var newsid=req.query.newsid;
    connection.query("SELECT * FROM `baidu` WHERE newsid=?",[newsid], function(err, rows, fields) {
        //console.log("good");
        res.json(rows);
    });
});
//模态框取值结束；
//删除新闻。
router.post('/delete', function(req, res) {
	var newsid=req.body.newsid;
    connection.query("DELETE FROM `baidu` WHERE `baidu`.`newsid`=?",[newsid], function(err, result) {
        console.log(result.affectedRows);
        res.json(result);
    });
});


//插入新闻
router.post('/insert', function(req, res) {
	var newstype=req.body.newstype,
	 newstitle=req.body.newstitle,
	 newsimg=req.body.newsimg,
	 newstime=req.body.newstime,
	 newssrc=req.body.newssrc;

    connection.query("INSERT INTO `baidu` (`newstitle`,`newstype`,`newsimg`,`newstime`,`newssrc`) VALUES (?,?,?,?,?)",[newstitle,newstype,newsimg,newstime,newssrc], function(err, result) {
        console.log(result.insertId);
        res.json(result);
    });
});
module.exports = router;
