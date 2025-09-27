# EPAM Website Automated Tests

This repository contains automated tests for the EPAM website using Playwright.

## Test Scenarios

### EPAM Services Navigation Test
- Navigate to https://www.epam.com/
- Select "Services" from the header menu
- Click the "Explore Our Client Work" link
- Verify that the "Client Work" text is visible on the page

## Setup

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

Run all tests:
```bash
npx playwright test
```

Run specific test:
```bash
npx playwright test epam-services.spec.ts
```

Run tests with UI mode:
```bash
npx playwright test --ui
```

## Viewing Test Reports

After test execution, view the HTML report:
```bash
npx playwright show-report
```