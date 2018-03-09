<?php 
//更新新闻数据php
header("Content-type:application/json;charset=utf-8");
require_once('db.php');
if ($conn) {
	$newsid = addslashes(htmlspecialchars($_POST['id']));
      $newstitle=addslashes(htmlspecialchars($_POST['newstitle']));
      $newstype=addslashes(htmlspecialchars($_POST['newstype']));
      $newsimg=addslashes(htmlspecialchars($_POST['newsimg']));
      $newstime=addslashes(htmlspecialchars($_POST['newstime']));
      $newssrc=addslashes(htmlspecialchars($_POST['newssrc']));
	$sql = "UPDATE `baidu` SET `newstitle` = '{$newstitle}', `newsimg` = '{$newsimg}', `newstime` = '{$newstime}', `newstype` = '{$newstype}', `newssrc` = '{$newssrc}' WHERE `baidu`.`newsid` = {$newsid}";
	
	mysqli_query($conn,"SET NAMES UTF8");
	$result=mysqli_query($conn,$sql);
	 
	echo json_encode(array('update' =>'success'));
}

//$sql = "UPDATE `baidu` SET `newstitle` = \'朴槿惠迎周 在野党程序\', `newsimg` = \'img/8.jpg\', `newstime` = \'2016-12-09\', `newstype` = \'精选\', `newssrc` = \'搜狐世界\' WHERE `baidu`.`newsid` = 120";
 ?>