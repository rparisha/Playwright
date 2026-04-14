import { test, expect, Locator } from "@playwright/test";

test('Verify locators', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    
    // Locators themselves don't need await...
    const logo: Locator = page.getByAltText("Practice Test Automation");
    
    // ...but ACTIONS and EXPECTS do!
    await logo.click(); 
    await expect(logo).toBeVisible();
  
    // await expect(page.getByText("Welcome to our store")).toBeVisible();  //full string
     await expect(page.getByText("Hello")).toBeVisible();  //sub string
     //await expect(page.getByText(/Welcome\s+To\s+Our\s+store/i)).toBeVisible();   //regular expression 
     
     await page.getByRole('link', { name: 'Practice', exact: true }).click();  // we use exact 
     await expect(page.getByRole("heading", {name:'Practice'})).toBeVisible();

     

  


     





});