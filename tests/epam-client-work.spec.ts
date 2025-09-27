import { test, expect } from '@playwright/test';

/**
 * Test Suite for EPAM website navigation and content verification
 * 
 * This test verifies the navigation flow from the EPAM homepage
 * to the Client Work page through the Services menu.
 */
test('Navigate to Client Work page through Services menu', async ({ page }) => {
  // Step 1: Navigate to EPAM homepage
  await test.step('Navigate to EPAM homepage', async () => {
    await page.goto('https://www.epam.com/');
    
    // Verify page loaded successfully
    await expect(page).toHaveTitle(/EPAM/);
  });

  // Step 2: Select "Services" from the header menu
  await test.step('Click on Services menu item', async () => {
    // Wait for the header navigation to be visible
    const servicesMenuItem = page.locator('header a:text("Services")').first();
    await expect(servicesMenuItem).toBeVisible();
    await servicesMenuItem.click();
    
    // Verify Services page loaded
    await expect(page).toHaveURL(/.*\/services/);
  });

  // Step 3: Click the "Explore Our Client Work" link
  await test.step('Click on Explore Our Client Work link', async () => {
    // Find and click the "Explore Our Client Work" link
    const clientWorkLink = page.getByRole('link', { name: /Explore Our Client Work/i });
    await expect(clientWorkLink).toBeVisible();
    await clientWorkLink.click();
    
    // Wait for navigation to complete
    await page.waitForURL(/.*\/our-work/);
  });

  // Step 4: Verify that the "Client Work" text is visible on the page
  await test.step('Verify Client Work text is visible', async () => {
    // Check for "Client Work" text on the page
    const clientWorkText = page.getByText('Client Work', { exact: false });
    await expect(clientWorkText).toBeVisible();
  });
});