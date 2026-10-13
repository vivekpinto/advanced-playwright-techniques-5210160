import {test, expect} from "@playwright/test";

test.use({storageState: "auth.json"})

test("My Accounts Page", async ({page}) =>{
    await page.goto ("https://practicesoftwaretesting.com/account");
    await expect (page.getByRole("heading", {name: "My account"})).toBeVisible();
})