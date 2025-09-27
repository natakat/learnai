# EPAM Website Automated Tests

This directory contains automated tests for the EPAM website using Playwright.

## Test Scenarios

### epam-client-work.spec.ts
Tests the navigation flow from EPAM homepage to the Client Work page:
1. Navigate to https://www.epam.com/
2. Select "Services" from the header menu
3. Click the "Explore Our Client Work" link
4. Verify that the "Client Work" text is visible on the page

## Running Tests

To run the tests:

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

# Run tests
npx playwright test
```

## Viewing Test Reports

After running tests, you can view the HTML report:

```bash
npx playwright show-report
```