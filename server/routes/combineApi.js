const express = require("express");
const router = express.Router();
const { combineApi } = require("../controllers/combineApi");

router.get("/:id", combineApi);

module.exports = router;
