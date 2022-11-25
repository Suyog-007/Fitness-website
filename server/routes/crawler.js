const express = require("express");
const router = express.Router();
const { getCategories } = require("../controllers/crawler");

router.get('/', getCategories);

module.exports = router;
