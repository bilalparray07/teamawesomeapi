const Mom = require("../model/mom");
const Players = require("../model/product");

const getAllPlayers = async (req, res) => {
  const players = await Players.find();
  res.status(200).json({ players });
};

const getMOM = async (req, res) => {
  const mom = await Mom.find();
  res.status(200).json({ mom });
};
module.exports = { getAllPlayers, getMOM };
