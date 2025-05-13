function enviarResposta()
{ 
     document.getElementById
     ("inputUsuario").
      innerHTML = "Nome enviado foi: " + window.prompt 
      ("Digite seu nome: ");

}

function exibirResposta()
{
    window.alert ("Nome enviado foi:" + document.getElementById("nome").value);

}