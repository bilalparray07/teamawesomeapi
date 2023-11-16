const express = require("express");
const router = express.Router();

const { getAllPlayers } = require("../controllers/product");
router.route("/").get(getAllPlayers);

module.exports = router;
