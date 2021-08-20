let jogo1 = "pedra"

switch(jogo1){
    case "pedra":
        console.log("empateu");
        break;
    case "tesoura":
        console.log("ganhou");
        break;
    case "papel":
        console.log("perdeu");
        break;
    default:
        console.log("ops, opcao invalida");
}


let jogo2 = "papel"

switch(jogo2){
    case "pedra":
        console.log("ganhou");
        break;
    case "tesoura":
        console.log("perdeu");
        break;
    case "papel":
        console.log("empatou");
        break;
    default:
        console.log("ops, opcao invalida");
}


let jogo3 = "tesoura"

switch(jogo3){
    case "pedra":
        console.log("perdeu");
        break;
    case "tesoura":
        console.log("empatou");
        break;
    case "papel":
        console.log("ganhou");
        break;
    default:
        console.log("ops, opcao invalida");
}

