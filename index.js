const express = require('express');
const router = require('./src/routes/exercicio');

const app = express();

app.use(express.json());

app.use(router)

app.listen(3000, () => {
    console.log('servidor está rodando na porta 3000')
})