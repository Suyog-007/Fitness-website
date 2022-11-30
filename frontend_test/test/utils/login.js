const assert = require("assert");
const { By, until } = require('selenium-webdriver');

const login = async (driver, email, password) => {

    let loginButton = await driver.findElement(By.xpath('//*[@id="root"]/div/div[2]/div/a[1]'));
    await loginButton.click();

    let emailTextBox = await driver.findElement(By.xpath(`//*[@id="root"]/div/div[3]/div/div[2]/form/input[1]`));
    let passwordTextBox = await driver.findElement(By.xpath(`//*[@id="root"]/div/div[3]/div/div[2]/form/input[2]`));
    let submitButton = await driver.findElement(By.xpath(`//*[@id="root"]/div/div[3]/div/div[2]/form/button`));

    await emailTextBox.sendKeys(email);
    await passwordTextBox.sendKeys(password);

    await submitButton.click();
}

module.exports = login;