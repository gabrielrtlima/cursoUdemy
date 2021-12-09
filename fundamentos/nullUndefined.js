let valor // nao iniciada
console.log(valor);

valor = null //ausencia de valor
console.log(valor);

const produto = {};
console.log(produto.preco)
console.log(produto);

produto.preco = 3.5;
console.log(produto);

produto.preco = undefined //evitar atribuir
console.log(!!produto.preco);
console.log(produto);

produto.preco = null // sem preco
console.log(!!produto.preco);
console.log(produto)