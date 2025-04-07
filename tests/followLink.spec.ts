import { test, expect } from "@playwright/test"
import fs from "fs"

test.beforeEach(async ({ context }) => {
  await context.addCookies(
    JSON.parse(fs.readFileSync("cookies.json", "utf-8"))
  )
})

test("follow link without accepting cookies", async ({ page }) => {
  await page.goto("http://127.0.0.1:8080")
  const actualLink = await page
                            .getByRole("link", { name: "Linkedinn URL" })
                            .getAttribute("href")
  
  await expect(actualLink).toBe("https://www.linkedin.com/in/qambar/")
})