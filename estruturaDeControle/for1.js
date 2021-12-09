let contador = 1
while (contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}
console.log('=================================')
for (let i = 1; i <= 10; i++) {
    console.log(`contador = ${i}`)
}

const notas = [6.7, 8.7, 9.6, 8.1, 6.2]

for (let i = 0; i <= notas.length; i++) {
    if (notas[i] >= 7) console.log(notas[i])
}