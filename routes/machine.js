const express = require('express')
const Router = express.Router()

const machineController = require('../controllers/machine')

Router.get('/teams', machineController.getTeams)

Router.get('/teams/:teamId', machineController.getTeamPlayers)

module.exports = Router