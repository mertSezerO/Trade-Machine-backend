const Sequelize = require('sequelize')

const db = require('../util/database')

const Team = db.sequelize.define('team', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    totalSalary: Sequelize.INTEGER,
    noOfPlayers: Sequelize.INTEGER,
    imageURL: Sequelize.STRING,
    inConference: Sequelize.ENUM(['East', 'West'])
});

module.exports = Team