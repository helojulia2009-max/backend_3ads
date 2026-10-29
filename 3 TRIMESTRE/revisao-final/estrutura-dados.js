// Array (separado por vígula)
const carros = ['Camaro', 'Mustang', 'Audi']
             //    0         1          2
console.log(carros[33]) // undefined

for(carro of carros){
    console.log('Carro:'+ carro)
}