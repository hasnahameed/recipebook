<?php
$Recipe=$_POST['Recipe'];
$email2=$_POST['email2'];
$Ingredients=$_POST['Ingredients'];
$Instructions=$_POST['Instructions'];

    

    

$conn= new mysqli('localhost','root','','project');
if($conn->connect_error){
    die('Connection Failed :'.$conn->connect_error);
}else{
    $stmt=$conn->prepare("insert into conta(Recipe,email2,Ingredients,Instructions)
    values(?,?,?,?)");
    $stmt->bind_param("ssss",$Recipe,$email2,$Ingredients,$Instructions);
    $stmt->execute();
    echo " 👋Login successful....  <a href='contact.html'>Go Back</a>.";
    header("Location: recipe2.php");

    $stmt->close();
    $conn->close();
}
?>