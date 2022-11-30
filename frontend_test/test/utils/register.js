const assert = require("assert");
const { By , until } = require('selenium-webdriver');

const register = async (driver,email,password) => {

    let registerButton = await driver.findElement(By.id('registerButton'));

    await registerButton.click();

    let emailTextBox = await driver.findElement(By.id("registerEmail"));
    let passwordTextBox = await driver.findElement(By.id("registerPassword"));
    let confirmPasswordTextBox = await driver.findElement(By.id("registerConfirmPassword"));
    let submitButton = await driver.findElement(By.xpath("//button[@name='registerButton']"));

    await emailTextBox.sendKeys(email);
    await passwordTextBox.sendKeys(password);
    await confirmPasswordTextBox.sendKeys(password);

    await submitButton.click();

    let secondaryHeader = await driver.wait(until.elementLocated(By.name("secondaryHeader")), 20000);

}

module.exports = register;