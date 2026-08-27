import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("home page answers the core positioning and has no obvious accessibility violations", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  await expect(page.getByRole("heading", { level: 1, name: /Idea to growth/i })).toBeVisible();
  await expect(page.locator(".draft-tagline")).toHaveAttribute("aria-label", "Not just design. Not just code. We build what grows your business.");
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});

test("mobile navigation opens and closes with Escape", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  await page.getByRole("button", { name: /open navigation/i }).click();
  await expect(page.getByRole("dialog", { name: /mobile navigation/i })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog", { name: /mobile navigation/i })).toBeHidden();
});

test("contact form validates required fields", async ({ page }) => {
  await page.goto("/contact");
  await page.waitForLoadState("networkidle");
  await page.getByLabel("Name").fill("Asha Rao");
  await page.getByLabel("Work email").fill("asha@example.com");
  await page.getByLabel("What needs to change?").fill("Too short");
  await page.getByLabel("I consent to Orilto using this information to respond to my enquiry.").check();
  await page.getByRole("button", { name: /send enquiry/i }).click();
  await expect(page.getByText(/Describe what needs to change/i)).toBeVisible();
});

test("contact form submits through the contact API", async ({ page }) => {
  await page.route("**/api/contact", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ message: "Thanks. Your enquiry has been received.", id: "test-enquiry" })
    });
  });
  await page.goto("/contact");
  await page.waitForLoadState("networkidle");
  await page.getByLabel("Name").fill("Asha Rao");
  await page.getByLabel("Work email").fill("asha@example.com");
  await page.getByLabel("What needs to change?").fill("We need to replace a manual quotation process with a controlled customer portal.");
  await page.getByLabel("I consent to Orilto using this information to respond to my enquiry.").check();
  const request = page.waitForRequest((req) => req.url().includes("/api/contact") && req.method() === "POST");
  await page.getByRole("button", { name: /send enquiry/i }).click();
  await request;
  await expect(page.getByText(/Thanks\. Your enquiry has been received/i)).toBeVisible();
});
