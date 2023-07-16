const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 412,
  viewportHeight: 914,
  e2e: {
    baseUrl: 'http://localhost:3000/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});