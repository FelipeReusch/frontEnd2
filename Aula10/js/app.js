// Criacao do formulario

let formulario = document.createElement("form");
formulario.setAttribute('class', 'formulario');
document.body.appendChild(formulario); //coloca o formulario no Body

//selecao do formulario:
let form = document.querySelector(".formulario");

//insercao do titulo:
let titulo = document.createElement("h1");
let tituloTexto = document.createTextNode("login");

titulo.appendChild(tituloTexto); //colocar dentro do titulo
form.appendChild(titulo); //colocar o titulo dentro do form

// insercao dos input email:
let email = document.createElement("input");
email.setAttribute("placeholder", "email");
email.setAttribute("type", "email");
form.appendChild(email); // colocar email no form

// insercao dos input senha:
let senha = document.createElement("input");
senha.setAttribute("placeholder", "senha");
senha.setAttribute("type","senha");
form.appendChild(senha); //colocar senha no form

// insercao dos botoes:
let botaoEnviar = document.createElement("button"); // cria o tipo, no caso botao
let botaoTextoEnviar = document.createTextNode("enviar"); // fixa no texto enviar no botao
botaoEnviar.setAttribute("type", "send");
botaoEnviar.appendChild(botaoTextoEnviar); //coloca o texto no botao Enviar
form.appendChild(botaoEnviar); // colocar botao no form

let botaoCancelar = document.createElement("button");
let botaoTextoCancelar = document.createTextNode("cancelar"); // fixa no texto cancelar no botao
botaoCancelar.setAttribute("type","reset");
botaoCancelar.appendChild(botaoTextoCancelar); //coloca texto no botao Cancelar
form.appendChild(botaoCancelar); // colocar botao no form

// manipulacao de atributos:
//email.setAttribute("disabled", true);
//remocao do atributo:
//email.removeAttribute("placeholder");

// sugestao de estilizacao:

formulario.style.display ="flex";
formulario.style.maxWidth = "300px";
formulario.style.margin = "10% auto";
formulario.style.margin = "center";
formulario.style.flexDirection = "column";

// carregamento de tela
window.onload = alert("favor preencher o formulario");
 
//cancela o envio
botaoCancelar.onclick = function(){
    confirm("voce tem certeza que deseja cancelar o envio?");
}
// cancelar a acao reset padrao do botao
botaoEnviar.addEventListener('click', function(event){
    event.preventDefault();
});