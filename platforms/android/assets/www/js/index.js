//ALTURA DA DIV #MENU DINÂMICAMENTE

var altura = document.documentElement.clientHeight;

document.querySelector("#menu").style.height = altura - 70 + "px";

function redimensionar(){
    var altura = document.documentElement.clientHeight;

    document.querySelector("#menu").style.height = altura - 70 + "px";
}

window.addEventListener("resize", redimensionar);


//FUNÇÃO EXIBIR MENU LATERAL POR COMPLETO


$(document).ready(function(){
	$('.icon-menu').on('click touchstart', function(e){
		$('#conteudo').toggleClass('menu-active');
  		e.preventDefault();
	});

	$("ul.menu-lateral a").on("click", function(){
		var target = $(this).attr("href");
		$(".identidade").addClass("hidden");
    	$(target).removeClass("hidden");
	});

	$("#login").on("click", function(e){
		e.preventDefault();
		var login = $("#login-adm").val();
		var senha = $("#senha_adm").val();
		$("#msg").html("carregando...");

		$.ajax({
			type: "POST",
			url: "http://meumobile.url.ph/api-json/consulta-json.php",
			data: {usuario: login, senha: senha},
			dataType: "json"
		}).done(function(msg){
			if(msg.resultado == 1){
				$("#msg").html(msg.valores.login_usuario);
			}
			else {
				$("#msg").html(msg.mensagem);
			}
			
		});
	});
});



