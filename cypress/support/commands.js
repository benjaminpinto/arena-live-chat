import '@testing-library/cypress/add-commands'

Cypress.Commands.add(
  'loginFromSettingsMenu',
  (email = Cypress.env('email'), password = Cypress.env('password')) => {
    cy.get('.chat-room--chat--header--menu--container').click()
    cy.get('.arena-dropdown-menu').contains('Login').click()
    cy.findByPlaceholderText('Your email').type(email)
    cy.get('.arena-btn').click()
    cy.findByPlaceholderText('Password').type(password)
    cy.get('.live-login-second--form--btn').click()
  }
)
