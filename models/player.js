// const Sequelize = require('sequelize')

// const db = require('../util/database')

// const Player = db.sequelize.define('player', {
//     id: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     name: Sequelize.STRING,
//     position: {
//         type: Sequelize.ENUM(['PG','SG','SF','PF','C']),
//         allowNull:false
//     },
//     salary: Sequelize.INTEGER,
//     PER: Sequelize.INTEGER,
//     imageURL: Sequelize.STRING
// });

// module.exports= Player;

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    enum: ["PG", "SG", "SF", "PF", "C"],
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  per: {
    type: Number,
    required: true,
  },
  imageURL: {
    type: String,
  },
  teamId: {
    type: Schema.Types.ObjectId,
    ref: "Team",
    required: true,
  },
});

module.exports = mongoose.model("Player", playerSchema);
