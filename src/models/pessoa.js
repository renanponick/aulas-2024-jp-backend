const nomes = new Array("Ana", "Sebastião")

// criando a classe modelPessoa
class ModelPessoa {
    GetPessoas() {
        return nomes
    }
    CreatePessoa(name) {
        return nomes.push(name)
    }
    UpdatePessoa(id, name) {
        return nomes[id] = name
    }
    DeletePessoa(id) {
        return nomes.splice(id, 1)
    }
}
module.exports = new ModelPessoa()