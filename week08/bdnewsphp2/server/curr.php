<?php 
header("Content-type:application/json;charset=utf-8");
require_once('db.php');
if ($conn) {
	$newsid = addslashes(htmlspecialchars($_GET['newsid']));
	//$sql = "SELECT * FROM `baidu` WHERE `newsid` = {$newsid}";
	//$sql='SELECT * FROM baidu';
	$sql = "SELECT * FROM `baidu` WHERE `newsid` ={$newsid}";
	mysqli_query($conn,"SET NAMES UTF8");
	$result=mysqli_query($conn,$sql);
	 $senddata=array();
       while($row = mysqli_fetch_assoc($result)){
       			array_push($senddata,array(
       							'id'=>htmlspecialchars_decode($row['newsid']),
       							'newstype'=>htmlspecialchars_decode($row['newstype']),
       							'newstitle'=>htmlspecialchars_decode($row['newstitle']),
       							'newsimg'=>htmlspecialchars_decode($row['newsimg']),
       							'newstime'=>htmlspecialchars_decode($row['newstime']),
                        				'newssrc'=>htmlspecialchars_decode($row['newssrc']),
       									));
       		}
	echo json_encode($senddata);
}

//$sql = "UPDATE `baidu` SET `newstitle` = \'朴槿惠迎周 在野党程序\', `newsimg` = \'img/8.jpg\', `newstime` = \'2016-12-09\', `newstype` = \'精选\', `newssrc` = \'搜狐世界\' WHERE `baidu`.`newsid` = 120";htmlspecialchars_decode()
 ?>
