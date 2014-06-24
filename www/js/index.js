
//ALTURA DA DIV #MENU DINÂMICAMENTE

var altura = document.documentElement.clientHeight;
document.querySelector("#menu").style.height = altura - 70 + "px";

document.querySelector(".content").style.height = altura - 70 + "px";

function redimensionar(){
    var altura = document.documentElement.clientHeight;

    document.querySelector("#menu").style.height = altura - 70 + "px";

    document.querySelector(".content").style.height = altura - 70 + "px";
}

window.addEventListener("resize", redimensionar);





//FUNÇÃO EXIBIR MENU LATERAL POR COMPLETO



$(document).ready(function(){
	$('.icon-menu').on('click touchstart', function(e){
		$('#info-conteudo').toggleClass('menu-active');
  		e.preventDefault();
	});

	$("ul.menu-lateral a").on("click", function(){
		var target = $(this).attr("href");
		$(".identidade").addClass("hidden");
    	$(target).removeClass("hidden");
	});

	data.init();

});



