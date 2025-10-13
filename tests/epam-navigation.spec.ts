import { test, expect } from '@playwright/test';

/**
 * Test: EPAM Website Navigation
 * 
 * This test verifies basic navigation to the EPAM website and validates
 * that the page loads correctly by checking the title and key elements.
 */
test('should navigate to EPAM homepage', async ({ page }) => {
  // Step 1: Navigate to EPAM website
  console.log('Navigating to EPAM website...');
  await page.goto('https://www.epam.com');
  
  // Step 2: Verify the page title contains EPAM
  const title = await page.title();
  console.log(`Page title: ${title}`);
  expect(title).toContain('EPAM');
  
  // Step 3: Verify the EPAM logo is visible
  const logo = page.locator('a[href="https://www.epam.com"] img[alt="EPAM"]').first();
  await expect(logo).toBeVisible();
  console.log('EPAM logo is visible');
  
  // Step 4: Verify main navigation menu is present
  const mainNav = page.locator('nav:has-text("Services")');
  await expect(mainNav).toBeVisible();
  console.log('Main navigation menu is visible');
  
  // Step 5: Verify the page contains expected content sections
  const heroSection = page.locator('main section').first();
  await expect(heroSection).toBeVisible();
  console.log('Hero section is visible');
  
  // Step 6: Take a screenshot for visual verification
  await page.screenshot({ path: 'epam-homepage.png' });
  console.log('Screenshot captured');
  
  console.log('Test completed successfully');
});