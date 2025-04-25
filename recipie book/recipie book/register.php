<?php
$username1= $_POST['username1'];
$email1= $_POST['email1'];
$password1= $_POST['password1'];
$password2= $_POST['password2'];

if(!empty($username1) || !empty($email1) || !empty($password1) || !empty($password2))
{
    $host = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    $dbname = "project";


    $conn = new mysqli ($host, $dbusername,$dbpassword,$dbname);

    if(mysqli_connect_error()){
        die('Connect Error('. 
        mysqli_connect_error() .')'
        . mysqli_connect_error());
    }
    else{
        $SELECT = "SELECT email1 From register where email1 = ? Limit 1";
        $INSERT = "INSERT INTO register (username1,email1,password1,password2) VALUES(?,?,?,?)";

        $stmt = $conn->prepare($SELECT);
        $stmt->bind_param("s", $email1);
        $stmt->execute();
        $stmt->bind_result($email1);
        $stmt->store_result();
        $rnum = $stmt->num_rows;

        if($rnum==0){
            $stmt->close();
            $stmt = $conn->prepare($INSERT);
            $stmt->bind_param("ssss", $username1,$email1,$password1,$password2);
            $stmt->execute();
            echo"New record inserted successfully";
            header("Location: index.html");
            
              

            
        }else{
            echo"Someone already register using this email";
        }
        $stmt->close();
        $conn->close();

        }

}else{
    echo"ALLfield are required";
    die();
}
?>
