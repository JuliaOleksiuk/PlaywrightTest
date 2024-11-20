import { test, expect } from "@playwright/test";

test("test that should pass", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await expect(page).toHaveTitle(/Playwright/);
});

test("test that should fail due to assertion error", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await expect(page).toHaveTitle("Non-Existent Title");
});

test("test that should fail due to unexpected error", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  // Attempting to interact with a non-existent element will cause an error
  await page.click("#non-existent-element");
});

test.skip("test that should be skipped", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await expect(page).toHaveTitle("Playwright");
});

// test("get started link", async ({ page }) => {
//   await page.goto("https://playwright.dev/");
//   await page.getByRole("link", { name: "Get started" }).click();
//   await expect(
//     page.getByRole("heading", { name: "Installation" })
//   ).toBeVisible();
// });
