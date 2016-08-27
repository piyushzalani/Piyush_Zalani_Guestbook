<?php

	include('db-connection.php');

	$fileData = file_get_contents("php://input");
	$objFileData = json_decode($fileData);

	$Username = $objFileData ->username;
	$email = $objFileData ->email;
	$password = $objFileData ->password;

	mysql_query("INSERT INTO receptionist_register (user_name, email, password) VALUES ('$Username', '$email', '$password')");
	mysql_close($link);

?>
