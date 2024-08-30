const express = require('express');

const app = express();

app.get("/exercicio1/", (req, res) => {
    // http://localhost:3000/exercicio1/?num1=0&num2=3
    const num1 = req.query.num1
    const num2 = req.query.num2

    const resultado = Number(num1) + Number(num2);

    res.json({ message: resultado })
})

app.get("/exercicio2/", (req, res) => {
    // http://localhost:3000/exercicio2/?num1=0&num2=3
    const num1 = req.query.num1
    const num2 = req.query.num2

    const resultado = Number(num1) - Number(num2);

    res.json({ message: resultado })
})

app.listen(3000, () => {
    console.log('servidor está rodando na porta 3000')
})