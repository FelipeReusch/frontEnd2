let dividir = function(n1,n2){
    if(n2==0) {
        return "impossivel fazer divisao por 0"
    }else{
        return n1/n2;
    }
}

module.exports = {dividir};