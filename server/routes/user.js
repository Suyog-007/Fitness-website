const express = require("express");
const router = express.Router();
const { login, signup, getUser } = require("../controllers/user");
const passport=require("passport")
require("../strategy/jwtStrategy")
router.post("/login", login);
router.post("/signup", signup);
router.get("/details",
passport.authenticate("user",{session:false}) ,
getUser);

module.exports = router;
