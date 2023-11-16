const Product = require("../model/product");

const getAllPlayers = async (req, res) => {
  const players = await Product.find();
  res.status(200).json({ players });
};

module.exports = { getAllPlayers };
