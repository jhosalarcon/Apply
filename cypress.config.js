const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.automationexercise.com',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports/mochawesome',
      overwrite: false,
      html: true,
      json: true,
      timestamp: 'mmddyyyy_HHMMss'
    },
  },
  viewportWidth: 1280,
  viewportHeight: 720,
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 60000,
  retries: {
    runMode: 2,
    openMode: 0,
  },
});
