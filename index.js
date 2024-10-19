// Não é mais tudo !!!!
const express = require('express')
const routers = require('./src/routes/pessoa')

// Instanciar um express
const app = express()

// Middleware json - aceita json no body
app.use(express.json())

// Adicionar as rotas ao express
app.use(routers)

// Inicializar o servidor
app.listen(3000, () => {
    console.info("Servidor rodando na porta 3000")
})

// OOOOOOUUUUUU

// // Variavel com a porta
// const PORT = 3000

// // Inicializar o servidor
// app.listen(PORT, () => {
                    // usando o template string
//     console.info(`Servidor rodando na porta ${PORT}`)
// })
