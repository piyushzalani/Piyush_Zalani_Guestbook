<?php

	include('db-connection.php');

	session_start();

	$fileData = file_get_contents("php://input");
	$objFileData = json_decode($fileData);

	$firstname = $objFileData ->firstname;
	$lastname = $objFileData ->lastname;
	$email = $objFileData->email;
	$intime = $objFileData->intime;
	$outtime = $objFileData->outtime;

	mysql_query("INSERT INTO addvisitor (VisitorFirstName, VisitorLastName, VisitorEmail, VisitorInTime, VisitorOutTime, Id)
	 VALUES ('$firstname', '$lastname', '$email', '$intime', '$outtime', '$_SESSION[Id]')");
	mysql_close($link);

?>
