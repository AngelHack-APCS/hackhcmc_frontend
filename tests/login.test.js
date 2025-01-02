const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Login Test Suite', function() {
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    after(async function() {
        await driver.quit();
    });

    it('should login successfully', async function() {
        await driver.get('http://localhost:3000/auth/parent/login');
        await driver.findElement(By.name('email')).sendKeys('your-email@domain.com');
        await driver.findElement(By.name('password')).sendKeys('your-password');
        await driver.findElement(By.css('button[type="submit"]')).click();
        await driver.wait(until.titleIs('Parent Dashboard'), 5000);
        assert.strictEqual(await driver.getTitle(), 'Parent Dashboard');
    });
});