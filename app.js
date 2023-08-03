const express = require("express");
const app = express();
require("dotenv").config();

const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3001",
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
    credentials: true,
  })
);

//const db = require("./util/database");
const mongoose = require("mongoose");

const Team = require("./models/team");
const Player = require("./models/player");

const machineRouter = require("./routes/machine");

app.use(express.static("controllers/"));
app.use(express.urlencoded({ extended: false }));

app.use(machineRouter);

// Player.belongsTo(Team, { constraint: true, onDelete: "CASCADE" });
// Team.hasMany(Player);

mongoose.connect(process.env.DATABASE_URI).then(
  app.listen(process.env.PORT, () => {
    console.log("Listening on " + process.env.PORT);
  })
);

// db.sequelize
//   .sync()
//   .then((result) => {
//     app.listen(process.env.PORT, () => {
//       console.log("Listening on " + process.env.PORT);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
