import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("home page answers the core positioning and has no obvious accessibility violations", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /Turn business intent/i })).toBeVisible();
  await expect(page.getByText(/Built in India/i)).toBeVisible();
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});

test("mobile navigation opens and closes with Escape", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  await page.getByRole("button", { name: /open navigation/i }).click();
  await expect(page.getByRole("navigation", { name: /mobile navigation/i })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("navigation", { name: /mobile navigation/i })).toBeHidden();
});

test("contact form validates required fields", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: /send enquiry/i }).click();
  await expect(page.getByText(/Enter your name/i)).toBeVisible();
});
