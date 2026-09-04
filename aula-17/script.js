// Dados dos produtos disponíveis na loja
const produtos = [
    { id: 1, nome: "Caneca da Turma", preco: 29.90, imagem: "caneca.png" },
    { id: 2, nome: "Camiseta Front-end", preco: 49.90, imagem: "camiseta.png" },
    { id: 3, nome: "Adesivos Tech", preco: 15.00, imagem: "adesivo.png" }
];

// Passo 2: Criar o carrinho como um array de objetos em memória
let carrinho = [];

const listaProdutos = document.getElementById("lista-produtos");
const areaCarrinho = document.getElementById("area-carrinho");
const elementoTotal = document.getElementById("elemento-total");
const cartCounter = document.getElementById("cart-counter");
const btnFinalizar = document.getElementById("btn-finalizar");

// Passo 1: Exibir os produtos na tela com o botão de compra e data-id
function renderizarProdutos() {
    listaProdutos.innerHTML = "";
    produtos.forEach((produto) => {
        const card = document.createElement("div");
        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>R$ ${produto.preco.toFixed(2)}</p>
            <button class="btn" data-id="${produto.id}">Adicionar ao carrinho</button>
        `;
        listaProdutos.appendChild(card);
    });
}

// Passo 3: Mostrar os produtos que estão no carrinho na interface
function renderizarCarrinho() {
    areaCarrinho.innerHTML = "";
    let totalItens = 0;

    carrinho.forEach((item) => {
        totalItens += item.quantidade;
        const linha = document.createElement("div");
        linha.className = "cart-item";
        linha.innerHTML = `
            <span>${item.nome} (x${item.quantidade})</span>
            <span>R$ ${(item.preco * item.quantidade).toFixed(2)}</span>
            <button class="btn btn-remover" data-id="${item.id}">Remover</button>
        `;
        areaCarrinho.appendChild(linha);
    });

    cartCounter.textContent = totalItens;
    calcularTotal();
}

// Passo 4: Permitir remover produtos do carrinho usando filter()
function removerDoCarrinho(id) {
    carrinho = carrinho.filter((item) => item.id !== id);
    salvarCarrinho();
    renderizarCarrinho();
}

// Passo 5: Calcular e mostrar o valor total usando reduce()
function calcularTotal() {
    const total = carrinho.reduce((soma, item) => {
        return soma + (item.preco * item.quantidade);
    }, 0);

    elementoTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Passo 6: Salvar e carregar o carrinho no localStorage
function salvarCarrinho() {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function carregarCarrinho() {
    const dados = localStorage.getItem("carrinho");
    carrinho = dados ? JSON.parse(dados) : [];
}

// Passo 7: Criar a finalização da compra
function finalizarCompra() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    alert("Compra realizada com sucesso!");
    carrinho = [];
    salvarCarrinho();
    renderizarCarrinho();
}

// Evento de clique para adicionar produtos ao carrinho
listaProdutos.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        const idProduto = Number(e.target.getAttribute("data-id"));
        const produtoSelecionado = produtos.find(p => p.id === idProduto);

        const itemExistente = carrinho.find(item => item.id === idProduto);

        if (itemExistente) {
            itemExistente.quantidade++;
        } else {
            carrinho.push({
                id: produtoSelecionado.id,
                nome: produtoSelecionado.nome,
                preco: produtoSelecionado.preco,
                quantidade: 1
            });
        }

        salvarCarrinho();
        renderizarCarrinho();
    }
});

// Evento de clique para remover itens do carrinho
areaCarrinho.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-remover")) {
        const idProduto = Number(e.target.getAttribute("data-id"));
        removerDoCarrinho(idProduto);
    }
});

// Evento de clique para finalizar a compra
btnFinalizar.addEventListener("click", finalizarCompra);

// Inicialização da aplicação ao carregar a página
carregarCarrinho();
renderizarProdutos();
renderizarCarrinho();