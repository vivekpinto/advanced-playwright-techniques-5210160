import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
	timeout: 2200,
	testDir: "./tests",
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: "html",
	use: {
		screenshot: "only-on-failure",
		trace: "on-first-retry",
	},
	webServer: {
		command: "npm run server",
		url: "http://localhost:8080",
		timeout: 120 * 1000,
		reuseExistingServer: !process.env.CI,
	},
	projects: [
		{
			name: "tests-cookie",
			testDir: "./tests-cookie",
			use: {
				...devices["Desktop Chrome"],
				launchOptions: {
					args: ["--disable-blink-features=AutomationControlled"],
				},
			},
		},
		{
			name: "tests",
			testDir: "./tests",
			use: {
				...devices["Desktop Chrome"],
				launchOptions: {
					args: ["--disable-blink-features=AutomationControlled"],
				},
			},
			dependencies: ["tests-cookie"],
		},
	],
});
