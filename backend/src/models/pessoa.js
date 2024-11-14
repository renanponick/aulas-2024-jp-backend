const database = require('../config/database')

class ModelPessoa {
    constructor() {
        this.model = database.db.define('pessoas', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: database.db.Sequelize.STRING
            },
            email: {
                type: database.db.Sequelize.STRING,
                unique: true
            },
            password: {
                type: database.db.Sequelize.STRING
            }
        })
    }
}
module.exports = new ModelPessoa().model