# ApplyDigital Cypress Test

This project contains an automated end-to-end test for the [AutomationExercise](https://automationexercise.com/) website using Cypress. The test covers a critical user flow of browsing products, adding a product to the cart, registering a user, and checking out.

## Project Structure

- `cypress/e2e/` — Test specs
- `cypress/support/pages/` — Page Object Model classes for modular test design
- `cypress/support/commands.js` — Custom Cypress commands
- `cypress.config.js` — Cypress configuration file
- `package.json` — Project dependencies and scripts
- `cypress/reports/mochawesome/` — Generated Mochawesome JSON and HTML reports
- `cypress/docs/` — Testing documentation, lighthouse accessibility and performance reports

## Prerequisites

- Node.js (v16 or higher recommended)
- npm (comes with Node.js)

## Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>

   ```

2. Install dependencies

   ```bash
   npm install
   ```

## Running tests

To execute the Cypress test suite in headless mode and generate Mochawesome JSON reports, run:

```bash
npm run cypress:run
```

## Generating Test Reports

After tests finish running, generate a consolidated Mochawesome HTML report by running:

```bash
npm run report
```

Open the report at **cypress/reports/mochawesome/final/report.html** in your browser to view detailed test results.

## Accessibility and Performance Testing

You can run Lighthouse audits for accessibility and performance on the homepage with:

```bash
npm run lighthouse
```

This will generate an HTML report in the **cypress/docs/** directory.


## Testing documentation
- Framework Selection: Cypress -> **cypress/docs/framework-justification.md**
- Test case flow -> **cypress/docs/test-case-flow.md**
- Test execution report -> **cypress/docs/test-execution-report.md**
