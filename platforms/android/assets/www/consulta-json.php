<?php 
	include "config.php";

	sleep(3);

	$login = $_POST['usuario'];
	$senha = $_POST['senha'];

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