const peso1 = 1.0;
const peso2 = Number('2.0')

console.log(peso1, peso2);
console.log(Number.isInteger(peso1))
console.log(typeof (peso1, peso2))

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = ((avaliacao1 * peso1) + (avaliacao2 * peso2))/(peso1 + peso2);

console.log(total.toFixed(2));
console.log(total.toString(2));// em binario
console.log(typeof total)
console.log(typeof Number)