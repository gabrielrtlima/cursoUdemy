/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

function jurosSimples(c, i, t) {
    let j = c * i * t
    let m = c + j
    console.log(m)
}
function jurosCompostos(c, i, t) {
    let m = c * (1+i) ** t
    console.log(m)
}

jurosSimples(100, 10/100, 2)
jurosCompostos(100, 10/100, 2)