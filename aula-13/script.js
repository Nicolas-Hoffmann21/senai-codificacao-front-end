// Array inicial de produtos
const produtos = [
  { id: 1, nome: "Caneca", preco: 25, categoria: "Casa" },
  { id: 2, nome: "Mochila", preco: 120, categoria: "Acessórios" },
  { id: 3, nome: "Fone", preco: 90, categoria: "Eletrônicos" }
];

// Função para formatar o produto usando destructuring
const formatar = ({ nome, preco }) => `${nome} - R$ ${preco}`;

// Filtrando produtos baratos (< 100)
const baratos = produtos.filter(p => p.preco < 100);
console.log("Produtos baratos:", baratos);

// Copiando o primeiro produto com o spread operator sem alterar o original
const promo = { ...produtos[0], preco: 19.90 };
console.log("Original:", produtos[0].preco, "Promoção:", promo.preco);

// Renderizando os cards na tela usando o DOM
const container = document.getElementById("lista");

produtos.forEach(produto => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.textContent = formatar(produto);

  // Adicionando interatividade de clique para favoritar
  card.addEventListener("click", () => {
    card.classList.toggle("favorito");
  });

  container.appendChild(card);
});