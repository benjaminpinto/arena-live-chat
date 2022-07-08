import '@testing-library/cypress/add-commands'
import { faker } from '@faker-js/faker'
import 'cypress-iframe'

Cypress.Commands.add(
  'loginFromSettingsMenu',
  (email = Cypress.env('email'), password = Cypress.env('password')) => {
    cy.get('.chat-room--chat--header--menu--container').click()
    cy.get('.arena-dropdown-menu').contains('Login').click()
    cy.findByPlaceholderText('Your email', { timeout: 8000 }).type(email)
    cy.get('.arena-btn').click()
    cy.findByPlaceholderText('Password', { timeout: 8000 }).type(password)
    cy.get('.live-login-second--form--btn').click()
  }
)

Cypress.Commands.add('signUpFromSettingsMenu', () => {
  cy.get('.chat-room--chat--header--menu--container').click()
  cy.get('.arena-dropdown-menu').contains('Login').click()
  cy.iframe('.live-mini-login-modal--frame')
    .as('loginFrame')
    .findByPlaceholderText('Your email', { timeout: 8000 })
    .type(faker.internet.email())
  cy.get('@loginFrame').find('.login--welcome--continue-btn').click()
  cy.get('@loginFrame').find('.name').first().type(faker.name.firstName())
  cy.get('@loginFrame').find('.username').type(faker.internet.userName())
  cy.get('@loginFrame').find('.password').eq(1).type(faker.internet.password())
  cy.get('@loginFrame').findByText('Sign Up!').click()
  cy.get('.arena-dropdown-drop').click({ force: true })
  cy.get('.arena-modal-overlay').invoke('css', 'visibility', 'hidden')
})
