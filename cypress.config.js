const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://go.arena.im/chat/cesar/Xed5mok',
    chromeWebSecurity: false,
    video: false,
    defaultCommandTimeout: 15000,
    pageLoadTimeout: 15000,
    execTimeout: 15000,
    specPattern: 'cypress/tests',
  },
})
