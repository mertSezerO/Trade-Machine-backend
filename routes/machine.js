const express = require('express')
const Router = express.Router()

const machineController = require('../controllers/machine')

Router.get('/teams', machineController.getTeams)

module.exports = Router