const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //To scan and extract any file with .js extension use *
    specPattern: './cypress/integration/examples/*.js',
    screenshotsFolder: './cypress/failures/screenshots'
  },
});
