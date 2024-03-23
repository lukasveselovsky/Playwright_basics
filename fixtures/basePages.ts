import { test as baseTest} from '@playwright/test';

import { LoginPage } from '../page-objects/LoginPage';
import { HomePage } from '../page-objects/HomePage';

const test = baseTest.extend<{
    loginPage: LoginPage;
    homePage: HomePage;
}>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    homePage: async ({ page }, use) =>{
        await use(new HomePage(page));
    }
});

export default test;
export const { expect } = test;

// // Import základnej funkcionality pre testovanie z Playwright
// import { test as baseTest } from '@playwright/test';

// // Import našich stránkových objektov pre prihlasovaciu a domovskú stránku
// import { LoginPage } from '../page-objects/LoginPage';
// import { HomePage } from '../page-objects/HomePage';

// // Rozšírenie testu o vlastný kontext pre prístup k našim stránkovým objektom
// const test = baseTest.extend<{
//     loginPage: LoginPage;   // Deklarácia vlastného kontextu pre stránkový objekt prihlasovacej stránky
//     homePage: HomePage;     // Deklarácia vlastného kontextu pre stránkový objekt domovskej stránky
// }>({
//     loginPage: async ({ page }, use) => {  // Funkcia pre vytvorenie inštancie stránkového objektu pre prihlasovaciu stránku
//         await use(new LoginPage(page));    // Vytvorenie inštancie a predanie kontextu testu
//     },
//     homePage: async ({ page }, use) => {   // Funkcia pre vytvorenie inštancie stránkového objektu pre domovskú stránku
//         await use(new HomePage(page));     // Vytvorenie inštancie a predanie kontextu testu
//     }
// });

// // Export konfigurácie testu ako východzí export
// export default test;

// // Export funkcie `expect` pre použitie vo vlastných testoch
// export const { expect } = test;
