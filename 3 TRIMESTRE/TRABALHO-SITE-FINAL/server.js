import express from 'express' 
import path from 'path'

const dirBase = import.meta.dirname
const app = express()
const porta = 3000

// usando middlewaere (software intermediario)
app.use(express.static(path.join(dirBase,'src/publico')))

app.get('/', (req,res)=> {

 res.sendFile('src/paginas/index.html',{root: dirBase})
})
app.get('/filmes', (req,res)=> {

 res.sendFile('src/paginas/filmes.html',{root: dirBase})
})
app.get('/avaliacoes', (req,res)=> {

 res.sendFile('src/paginas/avaliacoes.html',{root: dirBase})
})
app.get('/sobre', (req,res)=> {

 res.sendFile('src/paginas/sobre.html',{root: dirBase})
})
app. listen (porta, ()=> {console.log ('servidor está vivo ')})


