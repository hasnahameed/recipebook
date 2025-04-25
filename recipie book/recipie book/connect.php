<?php
 $host = "localhost";
 $dbusername = "root";
 $dbpassword = "";
 $dbname = "project";
 $conn=new mysqli($host,$dbusername,$dbpassword,$dbname);
 if($conn->connect_error){
    echo"failed to connect dbname".$conn->connect_error;
 }
 ?>