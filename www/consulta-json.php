<?php

sleep(3);
	
	header('content-type: application/json; charset=utf-8');
	header("access-control-allow-origin: *");
    header("Access-Control-Allow-Credentials: true");
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');

	include "config.php";


	$login = $_GET['usuario'];
	$senha = $_GET['senha'];

	$sql = "SELECT * FROM mn_usuarios WHERE login_usuario = '".$login."' AND senha_usuario = '".$senha."'";
	$resultado = mysql_query($sql);

	$result = mysql_fetch_assoc($resultado);

	if(mysql_num_rows($resultado) == 1){
		$resposta = array(
							"resultado" => 1,
							"valores" => $result,
							"mensagem" => "logado com sucesso");

		echo json_encode($resposta);
	}
	else {
		$resposta = array("resultado" => 0,
						   "mensagem" => "Login e senha inválidos");
		echo json_encode($resposta);
	}

?>