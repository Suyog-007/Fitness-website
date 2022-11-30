const { By, Builder, until } = require('selenium-webdriver');
const { suite } = require('selenium-webdriver/testing');
const assert = require("assert");
const login = require('./utils/login.js');
const register = require('./utils/register.js');

const url = 'http://localhost:3000';
const email = 'test@gmail.com';
const password = 'Ak@123456';

const timeout = 10000;

suite(function (env) {
    describe('Login and visit script', function () {
        let driver;

        beforeEach(async function () {
            driver = await new Builder().forBrowser('chrome').build();
            driver.manage().window().maximize();
        });

        afterEach(() => driver.quit());

        it('Login and Check all the navbar links, at the end logout', async function () {

            await driver.get(url);

            await login(driver, email, password);

            let excersieButton = await driver.wait(until.elementLocated(By.partialLinkText('Exercises')), 5000);
            excersieButton.click();

            let reviewButton = await driver.wait(until.elementLocated(By.partialLinkText('Review')), 5000);
            reviewButton.click();

            let newsButton = await driver.wait(until.elementLocated(By.partialLinkText('News')), 5000);
            newsButton.click();

            let workoutButton = await driver.wait(until.elementLocated(By.partialLinkText('Workouts')), 5000);
            workoutButton.click();

            // await driver.sleep(2000).then(() => { console.log("hello") });
            // let authorLink = await driver.wait(until.elementLocated(By.partialLinkText('Authors')), 5000);
            // authorLink.click();

            // const author = await driver.wait(until.elementLocated(By.name('author_card')), 20000);
            // author.click();

            // const pages = await driver.wait(until.elementsLocated(By.name('book_page')), 20000);
            // for (let i = 0; i < pages.length; i = i + 2) {
            //     await driver.sleep(1000).then(() => pages[i].click());
            // }

            // for (let i = pages.length - 1; i >= 0; i = i - 2) {
            //     await driver.sleep(1000).then(() => pages[i].click());
            // }
        })
        it('BMI visit and calculation', async function () {
            await driver.get(url);
            let bmiButton = await driver.wait(until.elementLocated(By.partialLinkText('BMI Calculator')), 5000);
            bmiButton.click();

            let heightTextBox = await driver.wait(until.elementLocated(By.name(`bmi_height`)), 5000);
            let weightTextBox = await driver.wait(until.elementLocated(By.name(`bmi_weight`)), 5000);
            let ageTextBox = await driver.wait(until.elementLocated(By.name(`bmi_age`)), 5000);
            let submitButton = await driver.wait(until.elementLocated(By.name(`bmi_submit`)), 5000);

            await heightTextBox.sendKeys(180);
            await weightTextBox.sendKeys(80);
            await ageTextBox.sendKeys(25);

            await submitButton.click();
            
            await driver.sleep(2000).then(() => { console.log("hello") });
        })
    });
});