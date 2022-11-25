const { Crawler } = require("../models/crawler");
const axios = require("axios");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");


const getCategories = async (req, res, next) => {
	try {
		const url = "https://www.muscleandstrength.com/workout-routines";
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		await page.goto(url);
		const elems = await page.$('#block-system-main > div > div.mainpage-category-list');
		const categories = await Crawler.find({});
		const data = await elems.$$eval('.cell', cells => cells.map(cell => {
			const img = cell.querySelector('img')?.src;
			const category = cell.querySelector('h3')?.innerText;
			const url = cell.querySelector('a')?.href;
			return { img, category, url };
		}));
		await browser.close()

		return res.status(201).send({ message: "success", categories });
	} catch (error) {
		console.error(error);
		res.status(500).send({ message: "Internal Server Error" });
	}
}

// const getCategories = async (req, res, next) => {
// 	try {
// 		const url = "https://www.muscleandstrength.com/workout-routines";
// 		const pageHtml = await axios.get(url);
// 		const pageData = pageHtml.data
// 		const $ = cheerio.load(pageData);
// 		const categories = [];
// 		$(".mainpage-category-list .cell").each(function () {
// 			const category = $(this).find(".category-name").text();
// 			const image = $(this).find("img").attr("src");
// 			const url = $(this).find("a").attr("href");
// 			console.log({ category, image, url });
// 			categories.push({
// 				category,
// 				image,
// 				url,
// 			});
// 		});
// 		console.log(categories);

// 		return res.status(201).send({ message: "success", categories });
// 	} catch (error) {
// 		console.error(error);
// 		res.status(500).send({ message: "Internal Server Error" });
// 	}
// }

module.exports = {
	getCategories,
}
