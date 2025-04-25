<?php
session_start();
include("connect.php");
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Homepage</title>
</head>
<body>
    <div style="text-align:center; padding:15%;">
        <p style="font-size:50px; font-weight:bold;">
         Hello Welcome to my Page <?php
         if(isset($_SESSION['username'])){
            $email1=$_SESSION[username];
            $query=mysqli_query($conn, "SELECT register.* FROM `register` WHERE register.email1='$email1'");
            while($row=mysqli_fetch_array($query)){
                echo $row['username1'].''.$row['email1'];
            }
    
         } 
         ?>
         :)
        </p><br>
        <a href="recipe.html" class="button">View Menu</a><br><br>
        <a href="logout.php">Logout</a><br><br>
    </div>    
    
</body>
</html>