import { test, expect } from '@playwright/test';

/**
 * Test Suite: EPAM Website Navigation
 * This test verifies the navigation flow from homepage to Client Work section
 */
test('Navigate from homepage to Client Work page', async ({ page }) => {
  // Step 1: Navigate to EPAM homepage
  await test.step('Navigate to EPAM homepage', async () => {
    await page.goto('https://www.epam.com/');
    
    // Verify page loaded successfully
    await expect(page).toHaveTitle(/EPAM/);
    console.log('Successfully navigated to EPAM homepage');
  });

  // Step 2: Select "Services" from the header menu
  await test.step('Click on Services menu item', async () => {
    // Wait for the header to be fully loaded
    await page.waitForSelector('header');
    
    // Click on the Services menu item
    await page.click('text=Services');
    
    // Verify Services menu is visible
    await expect(page.locator('text=Services')).toBeVisible();
    console.log('Successfully clicked on Services menu');
  });

  // Step 3: Click the "Explore Our Client Work" link
  await test.step('Click on Explore Our Client Work link', async () => {
    // Find and click the "Explore Our Client Work" link
    await page.click('text=Explore Our Client Work');
    
    // Wait for navigation to complete
    await page.waitForLoadState('networkidle');
    console.log('Successfully clicked on Explore Our Client Work link');
  });

  // Step 4: Verify that the "Client Work" text is visible on the page
  await test.step('Verify Client Work text is visible', async () => {
    // Check if "Client Work" text is visible on the page
    await expect(page.locator('text=Client Work')).toBeVisible();
    console.log('Successfully verified Client Work text is visible');
  });
});