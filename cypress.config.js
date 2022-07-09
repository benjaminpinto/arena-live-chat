const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://go.arena.im/chat/cesar/Xed5mok',
    chromeWebSecurity: false,
    video: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 10000,
    execTimeout: 10000,
    specPattern: 'cypress/tests',
    retries: {
      runMode: 3,
      openMode: 2,
    },
  },
})
