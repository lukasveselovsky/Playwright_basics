import test, { expect } from '../fixtures/basePages';

test.describe('Alerts', () => {
    test.beforeEach(async ({ page}) =>{
        await page.goto('https://demoqa.com/alerts');
    })
    test('Simple alert', async ({ page }) => {
        page.on("dialog", async dialog => { // listener ktory pocka na alert, spusti sa ked na sa na stranke objavi dialog alert. Prijma ako parameter objekt dialog
            await dialog.accept();   
        })
        await page.locator('#alertButton').click();
    });

    test('Confirm alert', async ({ page }) => {
        page.on("dialog", async dialog => { 
            await dialog.dismiss(); 
        })
        await page.locator('#confirmButton').click();
        await expect(page.locator('#confirmResult')).toHaveText('You selected Cancel');
    });

    test('Promt alert', async ({ page }) => {
        page.on("dialog", async dialog => { 
            await dialog.accept('Lukas'); 
        })
        await page.locator('#promtButton').click();
        await expect(page.locator('#promtResult')).toHaveText('You entered Lukas');
    });

})
