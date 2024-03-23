import test, { expect } from '../fixtures/basePages';

test.describe('Login', () => {
    test.beforeEach(async ({ loginPage}) =>{
        await loginPage.gotoLoginPage();
    });

test('Verify hometitle', async ({ page, loginPage, homePage }) => {

    await loginPage.login();
    await expect(homePage.title).toBeVisible();

});

test('Verify add to cart funcionality', async ({ page, loginPage, homePage }) => {

    await loginPage.login();
    await homePage.clickOnAddToCart();
    await expect(homePage.cartBadge).toHaveText("1");
    
});

test('Verify remove from cart funcionality', async ({ page, loginPage, homePage }) => {

    await loginPage.login();
    await homePage.clickOnAddToCart();
    await expect(homePage.cartBadge).toHaveText("1");
    await homePage.clickOnRemoveFromCart();
    await expect(homePage.cartBadge).toBeHidden();
    
});
});
