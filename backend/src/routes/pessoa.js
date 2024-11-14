const express = require('express')
const controllerPessoa = require('../controllers/pessoa')
const auth = require("../middleware/auth")

// Inicializando as rotas do express
const router = express.Router()

// Criando as rotas
router.post('/', controllerPessoa.CreatePessoa)
router.post('/login', controllerPessoa.Login)

router.get('/', auth, controllerPessoa.GetPessoas)
router.get('/session', auth, controllerPessoa.GetSession)
router.put('/:id', auth, controllerPessoa.UpdatePessoa)
router.delete('/:id', auth, controllerPessoa.DeletePessoa)

// Exportar as rotas
module.exports = router