import express from 'express' 
import path from 'path'

const dirBase = import.meta.dirname
const app = express()
const porta = 3000

// usando middlewaere (software intermediario)
app.use(express.static(path.join(dirBase,'publico')))

app.get('/', (req,res)=> {

 res.sendFile('/paginas/index.html',{root: dirBase})
})

app. listen (porta, ()=> {console.log ('servidor está vivo ')})


