<?php

	include('db-connection.php');

	$fileData = file_get_contents("php://input");
	$objFileData = json_decode($fileData);

	$firstname = $objFileData ->firstname;
	$lastname = $objFileData ->lastname;
	$email = $objFileData ->email;
	$intime = $objFileData ->intime;
	$outtime = $objFileData ->outtime;


	mysql_query("UPDATE addvisitor SET VisitorLastName='$lastname', VisitorEmail='$email', VisitorInTime='$intime', VisitorOutTime='$outtime' WHERE VisitorFirstName='$firstname'");
	mysql_close($link);

?>
