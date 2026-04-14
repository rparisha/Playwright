import { test, expect } from "@playwright/test";

test.describe('Practice Test Automation', () => {
test('Verify the title of the page', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const title = await page.title();
    console.log(title);
    expect(title).toBe('OrangeHRM');
});

test('Verify the URL of the page', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const url = page.url();
    console.log(url);
    expect(url).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

test('Verify login functionality', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('h6')).toHaveText('Dashboard');
});

test('Verify the visible test in Buzz after posting a message' , async ({page}) =>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();
    await page.locator('span', { hasText: 'Buzz' }).click();
    await expect(page.locator('h6')).toHaveText('Buzz');
    await page.getByPlaceholder("What's on your mind?").fill('Hello everyone!');
    await page.locator("//button[@type='submit']").click();
    await expect(page.getByText('Hello everyone!')).toBeVisible();
});

test('Verify the website domain name', async ({page}) => {
    await page.goto('https://example.com');
    const domainTitle = await page.title();
    console.log(domainTitle);
    expect(domainTitle).toBe('Example Domain');
    await expect(page.locator('h1')).toHaveText('Example Domain');

});

});