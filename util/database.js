const Sequelize = require('sequelize')
require('dotenv').config()

module.exports.sequelize = new Sequelize('nba','root',process.env.PASSWORD, {
    dialect: 'mysql',
    host:'localhost',
})

//process.env.DATABASE,process.env.USERNAME