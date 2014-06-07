data = {};

function registraUsuario(usuario, senha) {
  data.usuario = usuario;
  data.pass = senha;
}

function api(obj, callback) {

  var seguro = data.pass + "qualquercoisa";

  var dados = {
    usuario: data.usuario,
    pass: CryptoJS.SHA1(seguro).toString(CryptoJS.enc.Hex)
  };

  console.log("enviando", dados);

  $.ajax({
    url: "http://labs.vxcom.me/aula/aula.php",
    dataType: "json",
    method: "POST",
    data: dados,
    success: function(resposta, status, xhr) {
      console.log(resposta);
      if (resposta.status === "erro") {
        alert("Erro:" + resposta.msg);
      } else {
        localStorage.setItem("data", JSON.stringify(data));
        console.log(data);
      }
    }
  });
}

$(document).ready(function() {

  var t = localStorage.getItem("data");

  if (t) {
    data = JSON.parse(t);
  }


  $("#botao").click(function() {
    api();
  });
});
