const express = require('express');
const app = express();

app.use(express.json())

app.get("/exercicio1/", (req, res) => {
    // http://localhost:3000/exercicio1/?num1=0&num2=3
    const num1 = req.query.num1
    const num2 = req.query.num2

    const resultado = Number(num1) + Number(num2);

    res.json({ resultadoGet: resultado })
})

app.get("/exercicio2/", (req, res) => {
    // http://localhost:3000/exercicio2/?valorHora=0&horasTrabalhadas=3
    const valorHora = Number(req.query.valorHora)
    const horasTrabalhadas = Number(req.query.horasTrabalhadas)

    const salario = valorHora * horasTrabalhadas;
    // res.status - status de retorno
    // res.json() - envio do retorno
    // res.send() - envio do retorno
    res.json({ resultado: salario })
})

app.post("/exercicio1/", (req, res) => {
    // http://localhost:3000/exercicio1
    const num1 = req.body.num1
    const num2 = req.body.num2

    const resultado = Number(num1) + Number(num2);

    // informar um status diferente de 200 (pesquisar sobre 😊)
    res.status(201).json({ resultadoPost: resultado })
})


app.post("/exercicio15/", (req, res) => {
    // http://localhost:3000/exercicio1
    const { a, b, c } = req.body

    if ((a + b < c) || (a + c < b) || (b + c < a) ){
        resultado = 'Nao é um triangulo'
    } else if ((a == b) || (a == c)) {
        resultado = 'Equilatero'
    } else if ((a==b) || (a==c) || (b==c)) {
        resultado = 'Isósceles'
    } else {
        resultado = 'Escaleno'
    }

    // informar um status diferente de 200 (pesquisar sobre 😊)
    res.status(201).json({ resultado })
})

app.listen(3000, () => {
    console.log('servidor está rodando na porta 3000')
})