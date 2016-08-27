<?php

include('db-connection.php');

session_start();

	$fileData = file_get_contents("php://input");
	$objFileData = json_decode($fileData);

	$username = $objFileData->username;
	$password = $objFileData->password;

	$result = mysql_query("select * from receptionist_register where user_name = '$username' and password = '$password'");
	$row = mysql_fetch_array($result) or die(mysql_error());
	
	if(!empty($row['user_name']) AND !empty($row['password']))
	{
        echo "0";
        $_SESSION['Id'] = $row['Id'];
        $_SESSION['USERNAME'] = $row['user_name'];
    }else {
        echo "1";
	}

?>