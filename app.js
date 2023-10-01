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

const mongoose = require("mongoose");

const Team = require("./models/team");
const Player = require("./models/player");

const machineRouter = require("./routes/machine");

app.use(express.static("controllers/"));
app.use(express.urlencoded({ extended: false }));

app.use(machineRouter);

mongoose.connect(process.env.DATABASE_URI).then(
  app.listen(process.env.PORT, () => {
    console.log("Listening on " + process.env.PORT);
  })
);
