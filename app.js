const express = require('express')
const app = express()

const db = require('./util/database')

const Team = require('./models/team')
const Player = require('./models/player')

app.use(express.static('controllers/'))
app.use(express.urlencoded({ extended : false }))

Player.belongsTo(Team, {constraint: true, onDelete: 'CASCADE'})
Team.hasMany(Player)

db.sequelize
.sync()
.then((result) => {
    app.listen(process.env.PORT)
}).catch((err) => {
    console.log(err)
});

