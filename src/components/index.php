<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "login_register";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
name = $_POST['name'];
username = $_POST['username']
password = $_POST['password']
$sql = "INSERT INTO `users`(`id`, `name`, `username`, `password`) VALUES ('','$name','$username','$password')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
