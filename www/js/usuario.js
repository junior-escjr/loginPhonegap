data = {

	init: function(){
		//var btn = document.getElementById("login");
		document.addEventListener("deviceready", this.onDeviceReady, false); 
		//this.verificaUsuario();
	},

	onDeviceReady: function(){

		localStorage.setItem('dados', 'Junior');

		var t = localStorage.getItem("dados");

		if (t) {
			$("#fundo-logo, #camposlogin").hide();
			$("#conteudo, #dashboard").removeClass("hidden");
		}
		else {
			$("#fundo-logo, #camposlogin").show();
		}
		
	},

	verificaUsuario: function(dados){
		var user = dados.usuario;
		var senha = dados.pass;
		alert(user);
	}

	
};
