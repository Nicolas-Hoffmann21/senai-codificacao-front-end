// 2. Declaração dos produtos (usando array de objetos)
const produtos = [
  { nome: "Smartphone", preco: 1500, categoria: "Eletrônicos", estoque: 10, emPromocao: true },
  { nome: "Camiseta", preco: 50, categoria: "Roupas", estoque: 25, emPromocao: false },
  { nome: "Fones de Ouvido", preco: 200, categoria: "Eletrônicos", estoque: 15, emPromocao: true }
];

// 3. Função de cálculo de desconto
function calcularDesconto(preco, percentual) {
  const desconto = preco * (percentual / 100);
  return preco - desconto;
}

// 4. Função para exibir o produto usando template string
function exibirProduto(produto) {
  console.log(`Produto: ${produto.nome} | Preço: R$ ${produto.preco} | Estoque: ${produto.estoque} unidades`);
}

// 5. Função usando if/else para verificar promoção
function verificarPromocao(produto) {
  if (produto.emPromocao) {
    console.log(`✨ O produto ${produto.nome} está EM PROMOÇÃO!`);
  } else {
    console.log(`📦 O produto ${produto.nome} está com o preço normal.`);
  }
}

// --- Executando e testando tudo no Console ---

console.log("--- LISTA DE PRODUTOS ---");
// 6. Usando um for para listar todos os produtos numerados
for (let i = 0; i < produtos.length; i++) {
  console.log(`${i + 1}. Nome: ${produtos[i].nome} - Preço: R$ ${produtos[i].preco}`);
  verificarPromocao(produtos[i]);
}

console.log("\n--- TESTE DE DESCONTO ---");
const precoOriginal = 200;
const percentualDesconto = 10;
const precoFinal = calcularDesconto(precoOriginal, percentualDesconto);
console.log(`Preço original: R$ ${precoOriginal} | Desconto: ${percentualDesconto}% | Preço com desconto: R$ ${precoFinal}`);