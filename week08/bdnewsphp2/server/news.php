
<?php
//新闻主页请求新闻目录
header("Content-type:application/json;charset=utf-8");
require_once('db.php');
if($conn )
{

      if ($_GET['newstype']) {
          # code...
          $newstype=$_GET['newstype'];
          $sql="SELECT * FROM baidu WHERE `newstype`='{$newstype}'";
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

}
else{
        echo json_encode(array('success'=>'none'));
      }


 ?>