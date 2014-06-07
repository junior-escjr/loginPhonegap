<?php 
	$host = "mysql.hostinger.com.br";
	$user = "u833770664_mobi";
	$pass = "uYan8YDWNK";
	$db	  = "u833770664_mobi";

	$link = mysql_connect($host, $user, $pass) or die();
	mysql_select_db($db, $link);
?>