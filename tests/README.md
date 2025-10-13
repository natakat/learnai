# EPAM Website Navigation Test

This directory contains automated tests for the EPAM website using Playwright with TypeScript.

## Test Scenarios

### epam-navigation.spec.ts
This test verifies basic navigation to the EPAM website (https://www.epam.com) and validates that the page loads correctly by:
- Checking the page title contains "EPAM"
- Verifying the EPAM logo is visible
- Confirming the main navigation menu is present
- Validating that the hero section is visible
- Taking a screenshot for visual verification

## Running the Tests

To run the tests, use the following command:

```bash
npx playwright test tests/epam-navigation.spec.ts
```

## Test Results

The test will generate a screenshot named `epam-homepage.png` in the project root directory for visual verification.