function verificaTriangulo(a, b, c) {
    if (a === b && b === c){
        console.log("Equilatero")
    } else if (a === b && c !== a){
        console.log("Isósceles")
    } else console.log('Escaleno')
}

verificaTriangulo(3,4,5)
verificaTriangulo(3,3,3)
verificaTriangulo(3,3,2)