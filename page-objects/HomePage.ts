import { Locator, Page } from "@playwright/test"; // import tried a modulov ktore budem pouzivat

export class HomePage {
    page: Page;
    menu: Locator;
    title: Locator;
    item: Locator;
    addToCart: Locator;
    cartBadge: Locator;
    removeFromCart: Locator;
    
    constructor(page: Page) { // construktor definuje vyznam triedy page
        this.page = page;  // trieda ma ako parameter page typu page a tento parameter je priradeny k premennej this page. Typ page reprezentuje samotnu webovu stranku jde su funkcie a metody pouzitelne na interakciu so strankou
        this.menu = page.locator('#react-burger-menu-btn');
        this.title = page.getByText('Swag Labs');
        this.item = page.locator('#item_4_title_link');
        this.addToCart = page.locator('#add-to-cart-sauce-labs-backpack');
        this.removeFromCart = page.locator('#remove-sauce-labs-backpack');
        this.cartBadge = page.locator('//span[@class="shopping_cart_badge"]');
    }

    async clickOnMenu () { //prva definicia metody na pracu s predchadzajucimi elementmi
        await this.menu.click();
    }

    async clickOnTitle () { 
        await this.title.click();
    }

    async clickOnItem () { 
        await this.item.click();
    }

    async clickOnAddToCart () { 
        await this.addToCart.click();
    }

    async clickOnRemoveFromCart () { 
        await this.removeFromCart.click();
    }
}