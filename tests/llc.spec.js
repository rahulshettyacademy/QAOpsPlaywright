
import { test, expect } from '@playwright/test';

test('Playwright Special locators', async ({ page }) => {
  
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("abc123");
    await page.getByRole("button", {name: 'Submit'}).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();

    //5 seconds default timeout for expect assertions --{timeout:10000} Step level 
    await expect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible({ timeout: 10_000 });


    await page.getByRole("link",{name : "Shop"}).click();
    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();

    //locator(css) waitFor()

});


//30seconds
test('Playwright Test level time out ', async ({ page }) => {
  
    const slowExpect = expect.configure({timeout : 9000});
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("abc123");
  //7 seconds
    await page.getByRole("button", {name: 'Submit'}).click({timeout: 7000});
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();

    //5 seconds default timeout for expect assertions --{timeout:10000}- Step level --test level
    await slowExpect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible();


    await page.getByRole("link",{name : "Shop"}).click();
    await slowExpect(page.locator(".my-4").first()).toHaveText("Shop Name");
    //2 more
    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();


    //locator(css) waitFor()

});