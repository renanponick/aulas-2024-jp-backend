const ServicePessoa = require('../services/pessoa')

// Criando a classe controller da Pessoa
class ControllerPessoa {
    GetPessoas(req, res) {
        try {
            const pessoas = ServicePessoa.GetPessoas()
            res.send({ msg: pessoas })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    CreatePessoa(req,res){
        try {
            const name = req.body.name
            const pessoa = ServicePessoa.CreatePessoa(name)
            res.send({ msg: pessoa })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    UpdatePessoa(req,res){
        try {
            const id = req.params.id
            const name = req.body.name
            const pessoa = ServicePessoa.UpdatePessoa(id, name)
            res.send({ msg: pessoa })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    DeletePessoa(req,res){
        try {
            const id = req.params.id
            const pessoa = ServicePessoa.DeletePessoa(id)
            res.send({ msg: pessoa })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
}

module.exports = new ControllerPessoa()