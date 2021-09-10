let dadosDaUrl1 = location.search;
documento.write(dadosDaUrl1);
documento.write("<br>");
documento.write("<br>");

let dados = urlCompleta.split("?"); //carater delimitador
documento.write(dados[1]);
documento.write("<br>");

documento.write(dados).split("=")[1];
documento.write("<br>");