<?php
	
	include("db-connection.php");
	
	session_start();
	if($_SESSION['USERNAME'] == 'admin'){
		$result = mysql_query("SELECT * FROM addvisitor");
	}else {
		$result = mysql_query("SELECT * FROM addvisitor where Id = '$_SESSION[Id]'");
	};
	while ($row = mysql_fetch_array($result)) {
		$arr[] = $row;
	}
	
	echo json_encode($arr);

?> 

