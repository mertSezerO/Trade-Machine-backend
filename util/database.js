const Sequelize = require('sequelize')
require('dotenv').config()

module.exports.sequelize = new Sequelize(process.env.DATABASE,process.env.USERNAME, process.env.PASSWORD, {
    dialect: 'mysql',
    host:'localhost',
})

