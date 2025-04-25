<?php
include 'connect.php';

if(isset($_POST['register'])){
    $username1=$_POST['username1'];
    $email1=$_POST['email1'];
    $password1=$_POST['password1'];
    $password2=$_POST['password2'];
    

    $checkEmail="SELECT * From register where email1='$email1'";
    $result=$conn->query($checkEmail);
    if($result->num_rows > 0){
        echo "Email address already exists!";
    }
    else{
        $insertQuery="INSERT INTO register(username1,email1,password1,password2)
        VALUES('$username1','$email1','$password1','$password2')";

        if($conn->query($insertQuery)==TRUE){
            header("location: index.html");
        }
        else{
            echo "Error:".$conn->error;
        }
    }

}

if(isset($_POST['login'])){
    $username=$_POST['username'];
    $password3=$_POST['password3'];


    $sql="SELECT * FROM register WHERE username1='$username' and password1='$password3'";
    $result=$conn->query($sql);
    if($result->num_rows > 0){
        session_start();
        $row=$result->fetch_assoc();
        $_SESSION['username']=$row['username'];
        header("Location: homepage.php");
        
        exit();
        
        
    }
    else{
        echo "Not Found, Incorrect Email or Password.  👋 If this is your first time here. Please  <a href='registerFrom.html'>register first</a>.";
    }

    
    
}



?>
