//EXEMPLO 01-  MUNDANDO TITULO//
// leitura do H1 - titulo
//var titulo = document.querySelector(".titulo")
//console.log(titulo);
// escrever no titulo
//titulo.textContent ="SpaceX";

// EXEMPLO 02
var tagTrAstronauta = document.querySelector("#primeiro-astronauta");
console.log(tagTrAstronauta);

// altura
var tagTdAltura = tagTrAstronauta.querySelector(".info-altura");
console.log(tagTdAltura);
var txtAltura = tagTdAltura.textContent;
console.log(txtAltura)

//peso
var tagTdPeso = tagTrAstronauta.querySelector(".info-peso");
console.log(tagTdPeso);
var txtPeso = tagTdPeso.textContent;
console.log(txtPeso);

// EXEMPLO 03
var imc = txtPeso/(txtAltura**2);
console.log("imc:....."+imc);
var tagTdImc = tagTrAstronauta.querySelector(".info-imc");
console.log(tagTdImc);
tagTdImc.textContent = Math.round(imc); //escreveu o calculo do imc na tabela


