import {test, expect} from "@playwright/test";


test.describe('DemoQA tests', () => {
test('Verify the text box actions', async ({page}) => {

await page.goto('https://demoqa.com/text-box');
console.log("The page is loaded successfully");
await page.locator('#userName').fill("Murugan");
console.log("Username filled");
await page.locator('#userEmail').fill("murugan@gmail.com");
console.log("Email filled");
await page.locator('#currentAddress').fill("Coimbatore");
console.log("Current address filled");
await page.locator('#permanentAddress').fill("Kerala");
console.log("Permanent address filled");
await page.locator('#submit').click();
console.log("Submit button clicked");

expect(page.locator('#name')).toHaveText("Name:Murugan");
console.log("Name text verified");
expect(page.locator('#email')).toHaveText("Email:murugan@gmail.com");
console.log("Email text verified");
expect(page.locator('#currentAddress').nth(1)).toHaveText("Current Address :Coimbatore");
console.log("Current address text verified");
expect(page.locator('#permanentAddress').nth(1)).toHaveText("Permananet Address :Kerala");
console.log("Permanent address text verified"); 

});

test('Verify the checkbox functionality' , async ({page}) => {
    await page.goto('https://demoqa.com/checkbox');
    console.log("The page is loaded successfully");
    await page.getByLabel('Home').check();
    console.log("Checkbox is checked");
    await expect(page.getByLabel('Home')).toBeChecked();
    await page.getByLabel('Home').uncheck();
    console.log("Checkbox is unchecking");
    await expect(page.getByLabel('Home')).not.toBeChecked();
    console.log("Checkbox is unchecked successfully");
    await page.locator("//span[contains(@class, 'rc-tree-switcher_close')]").click();
    await page.getByLabel('Desktop').check();
    console.log("Desktop checkbox is checked");
    await expect(page.getByLabel('Desktop')).toBeChecked();
    await page.getByLabel('Desktop').uncheck();
    console.log("Desktop checkbox is unchecked");
    await expect(page.getByLabel('Desktop')).not.toBeChecked();
    console.log("Desktop checkbox is unchecked successfully");
});

 test('Verify upload and download functionality' , async ({page}) => {

    await page.goto('https://demoqa.com/upload-download');
    console.log('The page is successfully loaded');
    const filepath = "C:\\Users\\HEMANTH\\RJ\\Notes\\Selenium.txt";
    await page.setInputFiles('#uploadFile', filepath);
    console.log("The file is uploaded successfully");
    const uploadedFilePath = await page.locator('#uploadedFilePath').textContent();
    console.log("The uploaded file path is: " + uploadedFilePath);
    expect(uploadedFilePath).toContain("Selenium.txt");
    console.log("The uploaded file path is verified successfully");
    await page.locator('#downloadButton').click();
    console.log("The file is downloaded successfully");
    await page.waitForTimeout(3000);
    
});

});