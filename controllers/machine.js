const Team = require("../models/team");
const Player = require("../models/player");

exports.getTeams = (req, res, next) => {
  Team.findAll()
    .then((teams) => {
      res.status(200).json({
        teams: teams,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getTeamPlayers = (req, res, next) => {
  const team = req.params.teamId;
  if (!team) {
    console.error("Team id not valid.");
  }
  Player.findAll({
    where: {
      teamId: parseInt(team),
    },
  })
    .then((players) => {
      res.status(200).json({
        players: players,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
