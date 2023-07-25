const Sequelize = require('sequelize')

const db = require('../util/database')

const Player = db.sequelize.define('player', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    position: {
        type: Sequelize.ENUM(['PG','SG','SF','PF','C']),
        allowNull:false
    },
    salary: Sequelize.INTEGER,
    PER: Sequelize.INTEGER,
    imageURL: Sequelize.STRING
});

module.exports= Player;