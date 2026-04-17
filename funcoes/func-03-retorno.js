// funções de retorno exigem o termo "return"
// permitem tornar disponiveis os dados processados
// reaproveitamento e ações sequenciais
// podemos armazenar as funções de retorno
// as variaveis, funções, arrys, etc.

function meuSalario(Salario) {
    const contaluz = 145.0
    const aluguel =1350.0
    const restoSalario = Salario - (contaluz+aluguel)
    // console.log(restoSalario) // não serve p/ usuário
    return `o resto do seu salario é R$ ${restoSalario.toFixed(2).replace(",",",")}`
}
const resto = meuSalario(3500.0)
console.log(resto)