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
