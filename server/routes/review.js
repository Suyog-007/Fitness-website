const express = require("express");
const { addReview, getAllReviews, getReview } = require("../controllers/review");
const router = express.Router();
const passport = require("passport")

router.post("/", passport.authenticate("user", { session: false }), addReview);
router.get("/",
	//passport.authenticate("user",{session:false}),
	getAllReviews);
router.get("/:id", passport.authenticate("user", { session: false }), getReview);

module.exports = router;
