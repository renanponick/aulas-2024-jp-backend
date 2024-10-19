const ModelPessoa = require('../models/pessoa')

// criando a classe servicePessoa
class ServicePessoa {
    GetPessoas() {
        return ModelPessoa.GetPessoas()
    }
    CreatePessoa(name) {
        // fazer verificações - se mandou o name
        return ModelPessoa.CreatePessoa(name)
    }
    UpdatePessoa(id, name) {
        // fazer verificações - se mandou o id e o name
        return ModelPessoa.UpdatePessoa(id, name)
    }
    DeletePessoa(id) {
        // fazer verificações - se mandou o id
        return ModelPessoa.DeletePessoa(id)
    }
}
module.exports = new ServicePessoa()