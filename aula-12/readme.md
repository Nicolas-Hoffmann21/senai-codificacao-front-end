Não existe erro de sintaxe "chamativo" (tipo parêntese faltando) — todos os bugs rodam sem quebrar o programa, mas produzem resultado errado ou `undefined`. É isso que torna o exercício difícil: obriga a ler o código com atenção, não só rodar e ver se dá erro.

**Trecho 1 — Objeto**

```jsx
const produto = {
  nome: "Fone de Ouvido",
  preco: 120
};

console.log(produto.Nome);
```
O Código: console.log(produto.Nome);

O Erro: Case sensitivity (Sensibilidade a maiúsculas/minúsculas). Em JavaScript, as propriedades dos objetos são sensíveis a maiúsculas. O objeto foi criado com a propriedade nome (com n minúsculo), mas o código tenta acessar produto.Nome (com N maiúsculo).

Resultado: undefined

Correção:

console.log(produto.nome);

**Trecho 2 — Array de objetos**

```jsx
const produtos = [
  { id: 1, nome: "Mochila", preco: 150 },
  { id: 2, nome: "Garrafa", preco: 40 }
];

console.log(produtos[2].nome);
```

O Erro: Estouro de índice (Index out of bounds). Os arrays em JavaScript começam na posição 0. O array produtos possui apenas 2 elementos (nas posições 0 e 1). Tentar acessar a posição [2] busca um item que não existe.

Resultado: TypeError: Cannot read properties of undefined (reading 'nome') (o programa quebra aqui ao tentar ler a propriedade de algo que é undefined).

Correção: Para acessar o último item, por exemplo:


console.log(produtos[1].nome);

**Trecho 3 — JSON**

```jsx
const dadosAPI = `{
  'nome': "Caderno",
  "preco": 25,
}`;

const produto = JSON.parse(dadosAPI);
```
O Erro: Formatação inválida de JSON. O padrão JSON exige obrigatoriamente aspas duplas (") em todas as chaves e strings, e não permite vírgulas sobras (trailing commas) no último item. O uso de 'nome' com aspas simples e a vírgula após 25 invalidam o JSON.

Resultado: SyntaxError: Unexpected token... (lançado pelo JSON.parse).

Correção:

const dadosAPI = `{
  "nome": "Caderno",
  "preco": 25
}`;

**Trecho 4 — Destructuring**

```jsx
const produto = { nome: "Mouse", valor: 80 };

const { nome, preco } = produto;

console.log(`Preço: ${preco}`);
```
O Erro: Desestruturação com nome de propriedade incorreto. O objeto possui a propriedade valor, mas a desestruturação tenta extrair uma variável chamada preco. Como preco não existe no objeto, ela recebe o valor undefined.

Resultado: Preço: undefined

Correção: Ajustar o nome da variável para coincidir com a chave do objeto (ou usar um apelido/alias):


const { nome, valor: preco } = produto;
console.log(`Preço: ${preco}`);


**Trecho 5 — Spread vs. referência**

```jsx
const catalogoOriginal = [{ id: 1, nome: "Teclado", preco: 200 }];

const catalogoPromocional = catalogoOriginal;
catalogoPromocional[0].preco = 150;

console.log(catalogoOriginal[0].preco);
```
O Erro: Mutação por referência. Em JavaScript, arrays e objetos são copiados por referência, e não por valor. Atribuir catalogoOriginal a catalogoPromocional faz com que ambas as variáveis apontem para o mesmo espaço na memória. Alterar o preço no catálogo promocional altera automaticamente o original.

Resultado: 150 (o esperado em lógica de catálogos separados seria o original continuar 200).

Correção: Usar o operador spread (...) ou métodos como .map() / structuredClone() para criar uma cópia real (deep ou shallow copy):

const catalogoPromocional = [...catalogoOriginal];
// ou para clonar também o objeto interno:
const catalogoPromocional = JSON.parse(JSON.stringify(catalogoOriginal));
