const express = require("express");

// database access using knex
const db = require("../data/dbConfig.js");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h2>hello world</h2>");
});

module.exports = router;
