<?php 

header("Content-type:application/json;charset=utf-8");
$dbhost = 'localhost:3306';  //mysql服务器主机地址
$dbuser = 'wanghe';      //mysql用户名
$dbpass = '1234';//mysql用户名密码
$dbname = "baidunews";
$conn =mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);


 ?>