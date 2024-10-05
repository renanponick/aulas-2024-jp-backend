const express = require('express');
const ControllerExercicio = require('../controllers/exercicio')

const router = express.Router()

router.post("/exercicio1/", ControllerExercicio.Somar)
router.post("/exercicio2/", ControllerExercicio.CalculaSalario)
router.post("/exercicio15/", ControllerExercicio.Triangulo)

module.exports = router;