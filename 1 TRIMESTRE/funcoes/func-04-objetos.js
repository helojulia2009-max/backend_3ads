// funções de retorno podm retornar objetos
// chamamos isso de 'função costrutora'
// isso permite criarmos varias instâncias
// do mesmo objeto de forma dinâmica

function fabricaCarro(marca, modelo, montadora, motor){
    return{
        marca: marca,
        modelo: modelo,
        montadora: montadora,
        motor: motor
    }
}
const carro02 = {
     marca: 'BMW',
        modelo: 'X5',
        montadora: 'BMW S.A',
        motor: 'v8 6.0'
}
const camaro = fabricaCarro("camaro", "camaro v387", "chevrolet", "v8") // tenho 2 problemas
const BMW = fabricaCarro(carro02.marca, carro02.modelo, carro02.montadora, carro02.motor)
console.log (camaro)
console.log (BMW)