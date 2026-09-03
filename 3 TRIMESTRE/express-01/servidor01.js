 import express from 'express'

const app = express()
const porta = 3000

app.get('/', (req, res) =>{
    res.end('Olá, abacaxi!!')
})

//libera a porta do meu computador
app.listen(porta,() => { console.log('Servidor esta vivo!!')})