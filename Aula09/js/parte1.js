function criarCard(){
    title = document.getElementById("title").Value;

    let cardSection = document.getElementById("card");
    cardSection.innerHTML +=`<div><h2>${title}</h2></div>`;
}