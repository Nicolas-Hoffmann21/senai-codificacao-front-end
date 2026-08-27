// 1. Array de Produtos (Mínimo de 5 produtos com nome, preço, categoria e imagem)
const produtos = [
  { id: 1, nome: "Smartphone", preco: 1500.00, categoria: "Eletrônicos", imagem: "smartphone.jpg" },
  { id: 2, nome: "Camiseta", preco: 80.00, categoria: "Roupas", imagem: "camiseta.jpg" },
  { id: 3, nome: "Relógio", preco: 250.00, categoria: "Acessórios", imagem: "relogio.jpg" },
  { id: 4, nome: "Tênis Runner", preco: 199.90, categoria: "Calçados", imagem: "tenis.jpg" },
  { id: 5, nome: "Notebook", preco: 3500.00, categoria: "Eletrônicos", imagem: "notebook.jpg" }
];

// 2. Função Listar: Percorre o array e exibe todos os produtos no console usando Destructuring
function listarProdutos(lista) {
  console.log("--- LISTA DE TODOS OS PRODUTOS ---");
  lista.forEach(produto => {
    // Usando destructuring para extrair propriedades de forma elegante
    const { nome, preco, categoria } = produto;
    console.log(`Produto: ${nome} | Categoria: ${categoria} | R$ ${preco.toFixed(2)}`);
  });
}

// 3. Função Filtrar: Retorna apenas os produtos de uma categoria específica
function filtrarPorCategoria(lista, categoriaDesejada) {
  return lista.filter(produto => produto.categoria === categoriaDesejada);
}

// Executando a listagem geral
listarProdutos(produtos);

// 4. Testando o filtro por categoria e aplicando o Spread Operator para adicionar um novo produto com segurança
const categoriaAlvo = "Eletrônicos";
const produtosEletrônicos = filtrarPorCategoria(produtos, categoriaAlvo);

console.log(`\n--- PRODUTOS DA CATEGORIA: ${categoriaAlvo} ---`);
listarProdutos(produtosEletrônicos);

// Exemplo usando o Spread Operator (...) para adicionar um novo produto sem modificar o array original (Imutabilidade)
const novoProduto = { id: 6, nome: "Fone Bluetooth", preco: 120.00, categoria: "Eletrônicos", imagem: "fone.jpg" };
const catalogoAtualizado = [...produtos, novoProduto];

console.log(`\nTotal de produtos após usar o Spread Operator: ${catalogoAtualizado.length}`);