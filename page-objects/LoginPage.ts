import { Locator, Page } from "@playwright/test"; // import tried a modulov ktore budem pouzivat

export class LoginPage {
    page: Page;
    userNameInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
    invalidCredentialsErrorMessage: Locator;
    requiredCredentialsErrorMessage: Locator;
    lockedOutErrorMessage: Locator;

    constructor(page: Page) { // construktor definuje vyznam triedy page
        this.page = page;  // trieda ma ako parameter page typu page a tento parameter je priradeny k premennej this page. Typ page reprezentuje samotnu webovu stranku jde su funkcie a metody pouzitelne na interakciu so strankou
        this.userNameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.invalidCredentialsErrorMessage = page.getByText('Epic sadface: Username and password do not match any user in this service');
        this.requiredCredentialsErrorMessage = page.getByText('Epic sadface: Username is required');
        this.lockedOutErrorMessage = page.getByText('Epic sadface: Sorry, this user has been locked out.');
    }

    async gotoLoginPage () { //prva definicia metody na pracu s predchadzajucimi elementmi
        await this.page.goto('https://www.saucedemo.com');
    }

    async enterValidUsername () { 
        await this.userNameInput.fill('standard_user');
    }

    async enterLockedOutUser () { 
        await this.userNameInput.fill('locked_out_user');
    }

    async enterInvalidUsername () { 
        await this.userNameInput.fill('chucknorris');
    }

    async enterValidPassword () { 
        await this.passwordInput.fill('secret_sauce');
    }

    async enterInvalidPassword () { 
        await this.passwordInput.fill('chuckoveheslo');
    }

    async clickLoginButton () { 
        await this.loginButton.click();
    }

    async login() {
        await this.userNameInput.fill('standard_user');
        await this.passwordInput.fill('secret_sauce');
        await this.loginButton.click();
    }
}