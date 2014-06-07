<?php 
	include "config.php";

	sleep(3);

	$sql = "SELECT * FROM mn_usuarios";
	$resultado = mysql_query($sql);

	$json = array();

	while ($r = mysql_fetch_assoc($resultado)) {
		$json[] = $r;
	}
	
	echo json_encode(array("usuarios" => $json));
?>