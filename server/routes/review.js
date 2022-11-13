const express = require("express");
const { addReview, getAllReviews, getReview } = require("../controllers/review");
const router = express.Router();

router.post("/",addReview);
router.get("/",getAllReviews);
router.get("/:id",getReview);

module.exports = router;
