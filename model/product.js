const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: [true, "Role must be entered"],
  },
  ranking: {
    type: Number,
  },
  route: {
    type: String,
  },
});

module.exports = mongoose.model("Player", productSchema);
