// importar modulos
const http = require('node:http')
const porta = 8801

//criar servidor e rotas
const server = http.createServer( (req, res) => {
    //rotas e conteudos
})



//liberar porta no meu pc
server.LISTEN(porta,() => {
    console.log(`servidor rodando em http://localhost:${porta}`)
})