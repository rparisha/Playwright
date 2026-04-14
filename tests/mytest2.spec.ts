import { test, expect } from "@playwright/test";

test('Verify page title', async({ page }) => {

    await page.goto('https://www.saucedemo.com/');
     let title:String= page.title();
    console.log("Title", title);
    await expect(page).toHaveTitle("Swag Labs");
    
});
