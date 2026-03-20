// um array é um grupo indexado de valores
// podem ser homogêneos / heteroogêneos
// seus indicies vão de "0" ... "infinito"
// possuem funções nativas (prontas)
// podem ser iterados e checados

const time = ['petter', 'pan', true, , 56]
     // indices   0       1      2     3
time[55] // underfiend

for (const jogador of time) {
    console.log ("jogador: " +jogador) 
}