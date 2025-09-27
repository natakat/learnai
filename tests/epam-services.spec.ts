import { test, expect } from '@playwright/test';

/**
 * Test Suite: EPAM Website Navigation
 * This test validates the navigation flow from homepage to Client Work section
 */
test('Navigate to Client Work via Services menu', async ({ page }) => {
  // Step 1: Navigate to EPAM homepage
  await test.step('Navigate to EPAM homepage', async () => {
    await page.goto('https://www.epam.com/');
    
    // Wait for the page to be fully loaded
    await page.waitForLoadState('networkidle');
    
    // Verify that we are on the EPAM homepage
    await expect(page).toHaveTitle(/EPAM | Enterprise Software Development/);
  });

  // Step 2: Select "Services" from the header menu
  await test.step('Click on Services menu item', async () => {
    // Find and click the Services menu item in the header
    await page.locator('header').getByRole('link', { name: 'Services' }).click();
    
    // Wait for the services page to load
    await page.waitForLoadState('networkidle');
    
    // Verify we are on the Services page
    await expect(page).toHaveURL(/.*\/services$/);
  });

  // Step 3: Click the "Explore Our Client Work" link
  await test.step('Click on Explore Our Client Work link', async () => {
    // Find and click the "Explore Our Client Work" link
    await page.getByRole('link', { name: 'Explore Our Client Work' }).click();
    
    // Wait for the client work page to load
    await page.waitForLoadState('networkidle');
  });

  // Step 4: Verify that the "Client Work" text is visible on the page
  await test.step('Verify Client Work text is visible', async () => {
    // Check if the page contains "Client Work" text
    await expect(page.getByText('Client Work', { exact: false })).toBeVisible();
    
    // Additional verification that we're on the correct page
    await expect(page).toHaveURL(/.*\/our-work$/);
  });
});