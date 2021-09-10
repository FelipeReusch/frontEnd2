let textCompleto = location.hash; //
document.write(textCompleto); // parte1

let dados = textCompleto.split("#"); // carecter delimitador
//document.write(dados); // convertido em array   

let dados1 = dados[1];
let dados2 = dados[2];

document.write(dados1);
document.write("<br>");
document.write(dados2);

// objeto location href
//let url = location.href="https://www.digitalhouse.com";
//document.write(url);

//origem
let origem = location.origin;
document.write(origem); //protocolo hostname porta
document.write("<br>");
document.write("<br>");

//pathname --> caminho
let nomeCaminho = location.pathname;
document.write(nomeCaminho);
document.write("<br>");
document.write("<br>");

//port --> protocolo
let protocolo = location.protocol; //http
document.write(protocolo);
document.write("<br>");

//

