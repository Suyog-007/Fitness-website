const mongoose = require("mongoose");

const crawlerSchema = new mongoose.Schema({
	img: String,
	name: String,
	url: String,
	createdAt: { type: Date, default: new Date() }
});

const Crawler = mongoose.model("Crawler", crawlerSchema);

module.exports = { Crawler };