import test, { expect } from '../fixtures/basePages';

test.describe('Login', () => {
    test.beforeEach(async ({ loginPage}) =>{
        await loginPage.gotoLoginPage();
    });
    test('Successfull login', async ({ page, loginPage }) => {
        
        await loginPage.login();
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    
    });
    
    test('Cannot login with valid username and invalid password', async ({ page, loginPage }) => {
    
        await loginPage.enterValidUsername();
        await loginPage.enterInvalidPassword();
        await loginPage.clickLoginButton();
        await expect(loginPage.invalidCredentialsErrorMessage).toBeVisible();
        
    });
    
    test('Cannot login with invalid username and valid password', async ({ page, loginPage }) => {
    
        await loginPage.enterInvalidUsername();
        await loginPage.enterValidPassword();
        await loginPage.clickLoginButton();
        await expect(loginPage.invalidCredentialsErrorMessage).toBeVisible();
        
    });
    
    test('Cannot login with blank fields', async ({ page, loginPage }) => {
    
        await loginPage.clickLoginButton();
        await expect(loginPage.requiredCredentialsErrorMessage).toBeVisible();
        
    });
    
    test('Cannot login with log out user', async ({ page, loginPage }) => {
    
        await loginPage.enterLockedOutUser();
        await loginPage.enterValidPassword();
        await loginPage.clickLoginButton();
        await expect(loginPage.lockedOutErrorMessage).toBeVisible();
        
    });
});
