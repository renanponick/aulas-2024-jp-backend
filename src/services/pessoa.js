const ModelPessoa = require('../models/pessoa')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const SALT = 12

class ServicePessoa {
    async GetPessoas() {
        return ModelPessoa.findAll()
    }
    async CreatePessoa(name, password, email) {
        if(!name || !password || !email){
            throw new Error("Favor preencher todos os dados!")
        }
        const hashSenha = await bcrypt.hash(password, SALT)
        return ModelPessoa.create({ name, password: hashSenha, email })
    }
    async UpdatePessoa(id, name, password, email) {
        if(!id) {
            throw new Error("Favor informar o Id")
        }
        const pessoa = await ModelPessoa.findByPk(id)
        if(!pessoa) {
            throw new Error("Pessoa não encontrada")
        }
        pessoa.name = name || pessoa.name
        pessoa.password = password
            ? await bcrypt.hash(password, SALT)
            : pessoa.password
        pessoa.email = email || pessoa.email

        pessoa.save()
        return pessoa
        // if(!name || !password || !email){
        //     throw new Error("Favor preencher todos os dados!")
        // }
        // return ModelPessoa.update(
        //     { name, password, email },
        //     { where: { id } }
        // )
    }
    async DeletePessoa(id) {
        if(!id) {
            throw new Error("Favor informar o Id")
        }
        const pessoa = await ModelPessoa.findByPk(id)
        if(!pessoa) {
            throw new Error("Pessoa não encontrada")
        }
        return pessoa.destroy()
        // return ModelPessoa.destroy({ where: { id } })
    }

    async Login(email, password) {
        if(!email || !password) {
            throw new Error("Email ou senha inválido!")
        }

        const pessoa = await ModelPessoa.findOne({ where: { email } })

        if(!pessoa) {
            throw new Error("Email ou senha inválido!")
        }

        const senhaValida = bcrypt.compare(password, pessoa.password)

        if(!senhaValida) {
            throw new Error("Email ou senha inválido!")
        }

        return jwt.sign({ id: pessoa.id }, 'segredo', { expiresIn: 60 * 60 })
    }
}
module.exports = new ServicePessoa()