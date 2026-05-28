// a partir da função abaixo,
// crie as variações:
// (adição, subtração, multiplicação, divisão)

function divisao(n1, n2) {
    if (n2 != 0) {
        console.log("a divisão de " + n1 + " por " + n2 + " é = " + n1 / n2)
        n1 / n2
    } else {
        console.error("impossivel dividir por ZERO!!")
    }
}
divisao(12, 7)

function adição(n1, n2) {
    console.log("a adição de " + n1 + " por " + n2 + " é = " + (n1 + n2))
}
adição(12, 15)

function subtração(n1, n2) {
    console.log("a subtração de " + n1 + " por " + n2 + " é = " + (n1 - n2))
}
subtração(30, 12)

function multiplicação(n1, n2) {
    console.log("a multiplicação de " + n1 + " por " + n2 + " é = " + (n1 * n2))
}
multiplicação(25, 14)

