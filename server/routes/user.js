const express = require("express");
const router = express.Router();
const { login, signup, getUser } = require("../controllers/user");

router.post("/login", login);
router.post("/signup", signup);
router.get("/details", getUser);

module.exports = router;
