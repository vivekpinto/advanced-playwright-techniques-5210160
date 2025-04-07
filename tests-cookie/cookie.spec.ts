import { test } from "@playwright/test"
import fs from "fs"

test("save cookies", async ({ page, context }) => {
  await page.goto("http://127.0.0.1:8080")
  await page.getByRole("button", { name: "Accept all" }).click()
  
  fs.writeFileSync("cookies.json", JSON.stringify(await context.cookies()))
})