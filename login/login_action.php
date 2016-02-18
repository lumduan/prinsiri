<?php
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
@$username = $request->username;
@$password = $request->password;
 
$charmap="1234ABCDEFGHIJKLMNOPQRSTUYWXYZabcdefghijklmnopqrstuvwxyz";
$codRandom = str_shuffle($charmap);
 
include"db.php";
$strSQL = "SELECT * FROM administrator 
    WHERE username = '".$username."' 
	and password = '".$password."'";
	$objQuery = mysql_query($strSQL);
	$objResult = mysql_fetch_array($objQuery);
	if(!$objResult){
		echo 'false';
	}else{
		session_start();
		$_SESSION["token"] = $codRandom;
		$_SESSION["username"] = $username;
		echo 'true, '.$_SESSION["token"] ;
	}
mysql_close($objConnect);
?>