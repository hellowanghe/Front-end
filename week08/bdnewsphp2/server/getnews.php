<?php
//新闻后台管理请求新闻目录
require_once('db.php');
if($conn )
{
      $sql='SELECT * FROM baidu order by newsid desc';
      mysqli_query($conn,'SET NAMES utf8');
      $result = mysqli_query($conn, $sql);
      $senddata=array();
      while($row = mysqli_fetch_assoc($result)){
      array_push($senddata,array(
                  'id'=>$row['newsid'],
                  'newstype'=>$row['newstype'],
                  'newstitle'=>$row['newstitle'],
                  'newsimg'=>$row['newsimg'],
                  'newstime'=>$row['newstime'],
                  'newssrc'=>$row['newssrc'],
                  ));
          }
         echo json_encode($senddata);
          }


else{
  			echo json_encode(array('success'=>'none'));
  		}


//mysqli_close($conn);
// $arr=array(
// 		'newstype' => '百家', 
// 		'newsimg' => 'img/3.jpg', 
// 		'newstime' => '2016-2-28', 
// 		'newssrc' => '极客学院', 
// 		'newstitle' => '测试动态获取新闻标题', 
// 	);
	//echo json_encode($arr);

 ?>