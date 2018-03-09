
<?php 
header("Content-type:application/json;charset=utf-8");
require_once('db.php');
if ($conn) {
	$newsid = $_POST['newsid'];
	$sql="DELETE FROM `baidu` WHERE `baidu`.`newsid` = '{$newsid}'";
	mysqli_query($conn,"SET NAMES UTF8");
	$result=mysqli_query($conn,$sql);
	echo json_encode(array('success' =>'delete'));
}
//mysqli_close();
//DELETE FROM `baidu` WHERE `baidu`.`newsid` = 112;
 ?>