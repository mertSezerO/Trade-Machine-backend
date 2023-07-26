const Team = require('../models/team')
const Player = require('../models/player')

exports.getTeams = (req, res, next) => {
    Team.findAll()
    .then((teams) => {
        res
        .status(200)
        .json({
            teams: teams
        })
    }).catch((err) => {
        console.log(err)
    });
}

exports.getTeamPlayers = (req, res, next) => {
    const team = req.params.team
    if (!team){
        console.error('Team id not valid.')
    }
    Player.findAll({
        where: {
            team_id : parseInt(team)
        }
    })
}

exports.getPlayer = (req, res, next) => {

}