# EPAM Website Navigation Tests

This repository contains automated tests for the EPAM website navigation using Playwright.

## Test Scenarios

1. **Navigate from homepage to Client Work page**
   - Navigate to https://www.epam.com/
   - Select "Services" from the header menu
   - Click the "Explore Our Client Work" link
   - Verify that the "Client Work" text is visible on the page

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Install Playwright browsers:
   ```
   npx playwright install
   ```

## Running Tests

Run all tests:
```
npm test
```

Run with UI mode:
```
npx playwright test --ui
```

## Test Reports

After running tests, view the HTML report:
```
npx playwright show-report
```