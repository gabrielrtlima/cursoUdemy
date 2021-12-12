// closure é o escopo criado quando uma função é declarada
// esse escpop permite a função acessar e manipular variáveis extes à função

// Contexto léxico:

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())