// a configuração do nosso banco mysql
// utilizando o sequelize
const { Sequelize } = require('sequelize')

class Database {
    constructor() {
        this.init()
    }

    init() {
        this.db = new Sequelize({
            database: 'exemplo',
            host: 'localhost',
            username: 'root',
            dialect: 'mysql',
            password: ''
        })
    }
}

module.exports = new Database();