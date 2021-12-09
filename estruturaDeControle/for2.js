const notas = [6.7, 8.7, 9.6, 8.1, 6.2]

for (const notasKey in notas) {
    console.log(notasKey, notas[notasKey])
}

const pessoa = {
    nome: "Ana",
    sobrenome: "Silva",
    idade: 29,
    peso: 64
}

for (const i in pessoa) {
    console.log(`${i} = ${pessoa[i]}`)
}
console.log(i)