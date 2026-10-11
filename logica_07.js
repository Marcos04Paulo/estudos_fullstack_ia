let produtos = [
  {nome: "Notebook", preco: 4500, emEstoque: true},
  {nome: "Mouse", preco: 150, emEstoque: false},
  {nome: "Teclado", preco: 300, emEstoque: true},
  {nome: "Monitor", preco: 1200, emEstoque: false}
]

let produtosDisponiveis = produtos.filter(function(item){
  return item.emEstoque === true
});

console.log("Produtos disponíveis para vender.");
console.log(produtosDisponiveis);


let produtosCaros = produtos.filter(function(valor){
  return valor.preco >= 1000
})

console.log("Produtos Caros");
console.log(produtosCaros);