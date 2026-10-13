import { chromium, FullConfig } from "@playwright/test";

async function globalSetup(config: FullConfig){
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage()

    await page.goto("https://practicesoftwaretesting.com/auth/login")
    await page.waitForEvent('load');
    await page.getByRole('textbox', { name: 'Email address *' }).fill("vivekpinto5@gmail.com");
    await page.getByRole('textbox', { name: 'Password *' }).fill("Valerian@1234#");

    await page.getByRole("button", {name:"Login", exact:true}).click();

    await page.waitForURL("https://practicesoftwaretesting.com/account");

    await page.context().storageState({path: "auth.json"})
    await browser.close()
    
}

export default globalSetup;