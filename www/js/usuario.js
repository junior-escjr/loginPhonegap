data = {

	init: function(){
		//var btn = document.getElementById("login");
		document.addEventListener("deviceready", this.onDeviceReady, false); 
		//this.verificaUsuario();
	},

	onDeviceReady: function(){

		localStorage.setItem('dados', '');

		var t = localStorage.getItem("dados");

		if (t) {
			$("#login").hide();
			$("#conteudo").removeClass("hidden");
		}
		
	},

	verificaUsuario: function(dados){
		var user = dados.usuario;
		var senha = dados.pass;
		alert(user);
	}

	
};
