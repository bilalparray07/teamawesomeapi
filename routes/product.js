const express = require("express");
const router = express.Router();
const { getMOM } = require("../controllers/product");
const { getAllPlayers } = require("../controllers/product");
router.route("/").get(getAllPlayers);
router.route("/mom").get(getMOM);
module.exports = router;
