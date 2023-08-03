// const Sequelize = require('sequelize')

// const db = require('../util/database')

// const Team = db.sequelize.define('team', {
//     id: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     name: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     totalSalary: Sequelize.INTEGER,
//     noOfPlayers: Sequelize.INTEGER,
//     imageURL: Sequelize.STRING,
//     inConference: Sequelize.ENUM(['East', 'West'])
// });

// module.exports = Team

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
  },
  inConference: {
    type: String,
    enum: ["East", "West"],
    required: true,
  },
  totalSalary: {
    type: Number,
  },
  noOfPlayers: {
    type: Number,
  },
});

module.exports = mongoose.model("Team", teamSchema);
