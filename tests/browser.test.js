const { Builder, By, until } = require('selenium-webdriver');
require('geckodriver');

// Här anger vi var testfilen ska hämtas. De konstiga replaceAll-funktionerna ersätter
// mellanslag med URL-säkra '%20' och backslash (\) på Windows med slash (/).
const fileUnderTest = 'file://' + __dirname.replaceAll(/ /g, '%20').replaceAll(/\\/g, '/') + '/../dist/index.html';
const defaultTimeout = 10000;
let driver;
jest.setTimeout(1000 * 60 * 5); // 5 minuter

// Det här körs innan vi kör testerna för att säkerställa att Firefox är igång
beforeAll(async () => {
console.log(fileUnderTest);
    driver = await new Builder().forBrowser('firefox').build();
    await driver.get(fileUnderTest);
});

// Allra sist avslutar vi Firefox igen
afterAll(async() => {
    await driver.quit();
}, defaultTimeout);

// Mitt test
test("Display should show undefined if stack is empty when popping", async () => {
    let display = await driver.findElement(By.id('top_of_stack')).getText();
    expect(display).toBe("n/a");

    let pop = await driver.findElement(By.id('pop'));
    await pop.click();

    let alert = await driver.switchTo().alert();
    let alertMsg = await alert.getText();
    expect(alertMsg).toBe("Tog bort undefined")
    await alert.accept();

    let peek = await driver.findElement(By.id('peek'));
    await peek.click();
    
    expect(display).toBe("undefined");
});



/*
test('The stack should be empty in the beginning', async () => {
    let stack = await driver.findElement(By.id('top_of_stack')).getText();
    expect(stack).toEqual("n/a");
});

describe('Clicking "Pusha till stacken"', () => {
    it('should open a prompt box', async () => {
        let push = await driver.findElement(By.id('push'));
        await push.click();
        let alert = await driver.switchTo().alert();
        await alert.sendKeys("Bananer");
        await alert.accept();
    });
});
*/



/*

test('Should return alert message', async () => {
    let pop = await driver.findElement(By.id('pop'));
    await pop.click();

    let emptyAlert = await driver.switchTo().alert();
    let alertMsg = await emptyAlert.getText();
    expect(alertMsg).toBe("Tog bort undefined");

        let pop = await driver.findElement(By.id('pop'));
    let push = await driver.findElement(By.id('push'));
    let display = await driver.findElement(By.id('top_of_stack'));

});
*/

