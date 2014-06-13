data = {};

function registraUsuario(login, senha){
	data.usuario = login;
	data.senha = senha;
	
	alert(senha);

	api(data);
}

function api(data){

alert(data.usuario);

	var dados = {
		usuario: data.usuario,
		senha: data.senha
	}

	$("#msg").html('<img src="350.gif" alt="" />');

	$.ajax({
		type: "GET",
		url: "http://meumobile.url.ph/api-json/consulta-json.php",
		data: dados,
		dataType: "json",
		crossDomain: true
	}).done(function(msg){
		if(msg.resultado == 1){
			$("#msg").html(msg.valores.login_usuario);
			console.log();
		}
		else {
			$("#msg").html(msg.mensagem);
			console.log();
		}
			
	});
}

$(function(){


	$("#login").on("click", function(e){
		e.preventDefault();
		var login = $("#login-adm").val();
		var senha = $("#senha_adm").val();
		registraUsuario(login, senha);
	});


});