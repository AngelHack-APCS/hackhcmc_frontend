const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Navigation Test Suite', function() {
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    after(async function() {
        await driver.quit();
    });

    it('should navigate to Parent Login', async function() {
        await driver.get('http://localhost:3000');
        await driver.findElement(By.xpath("//button[contains(text(), 'For parent')]")).click();
        await driver.wait(until.urlContains('/auth/parent/login'), 5000);
        let loginTitle = await driver.findElement(By.xpath("(//h1)[2]")).getText();
        assert.strictEqual(loginTitle, 'Sign in');
    });
});