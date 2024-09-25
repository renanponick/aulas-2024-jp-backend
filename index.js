const express = require('express');
const {
    somar,
    calculaSalario,
    verificaTriangulos2
} = require('./service/exercicios');

const app = express();

app.use(express.json());

app.get("/exercicio1/", (req, res) => {
    // http://localhost:3000/exercicio1/?num1=0&num2=3
    const resultado = somar(req.query.num1, req.query.num2);

    res.json({ resultadoGet: resultado })
})

app.get("/exercicio2/", (req, res) => {
    // http://localhost:3000/exercicio2/?valorHora=0&horasTrabalhadas=3
    const salario = calculaSalario(
        Number(req.query.valorHora),
        Number(req.query.horasTrabalhadas)
    );
    res.json({ resultado: salario })
})

app.post("/exercicio1/", (req, res) => {
    // http://localhost:3000/exercicio1
    const resultado = somar(req.body.num1, req.body.num2);

    // informar um status diferente de 200 (pesquisar sobre 😊)
    res.status(201).json({ resultadoPost: resultado })
})

app.post("/exercicio15/", (req, res) => {
    // http://localhost:3000/exercicio1
    const { a, b, c } = req.body
    const resultado = verificaTriangulos2(a,b,c)
    res.status(201).json({ resultado })
})

app.listen(3000, () => {
    console.log('servidor está rodando na porta 3000')
})