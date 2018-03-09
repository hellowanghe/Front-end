<?php 
header("Content-type:application/json;charset=utf-8");
require_once('db.php');
if ($conn) {
	$newstitle=addslashes(htmlspecialchars($_POST['newstitle']));
	$newstype=addslashes(htmlspecialchars($_POST['newstype']));
	$newsimg=addslashes(htmlspecialchars($_POST['newsimg']));
	$newstime=addslashes(htmlspecialchars($_POST['newstime']));
	$newssrc=addslashes(htmlspecialchars($_POST['newssrc']));
	
	$sql="INSERT INTO `baidu` (`newstitle`,`newstype`,`newsimg`,`newstime`,`newssrc`) VALUES ('{$newstitle}','{$newstype}','{$newsimg}','{$newstime}','{$newssrc}')";//引号的区别；'',``??
	//$sql = "INSERT INTO `baidu` (`newsid`, `newstitle`, `newsimg`, `newstime`, `newstype`, `newssrc`) VALUES (\'111\', \'11111\', \'111111\', \'2016-12-16\', \'111\', \'11111\')";
mysqli_query($conn,"SET NAMES UTF8");
	
	$result=mysqli_query($conn,$sql);


echo json_encode(array('success' =>'ok','suc'=>$newstitle));

}
//DELETE FROM `baidu` WHERE `baidu`.`newsid` = 112;

 ?>