// Passo 3: Selecionando os cards e verificando a quantidade
const cards = document.querySelectorAll(".card");
console.log("Quantidade de cards:", cards.length);

// Passo 4: Percorrendo com forEach e exibindo no console
cards.forEach(function (card, indice) {
    const tituloDoCard = card.querySelector(".card-title");
    console.log(
        `Card ${indice + 1}:`,
        tituloDoCard ? tituloDoCard.textContent : "(sem título)"
    );
});

// Passo 5: Usando operador ternário e innerHTML para adicionar o emoji ✅
cards.forEach(function (card, indice) {
    const tituloDoCard = card.querySelector(".card-title");
    tituloDoCard 
        ? (tituloDoCard.innerHTML = tituloDoCard.textContent + " ✅") 
        : console.log("(sem título)");
});