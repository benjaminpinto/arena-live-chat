import '@testing-library/cypress/add-commands'
import 'cypress-iframe'
import { faker } from '@faker-js/faker'

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
  cy.get('@loginFrame')
    .find('.name')
    .first()
    .type(faker.name.firstName())
    .as('firstName')
  cy.get('@loginFrame').find('.username').type(faker.internet.userName())
  cy.get('@loginFrame').find('.password').eq(1).type(faker.internet.password())
  cy.get('@loginFrame').findByText('Sign Up!').click()
  cy.get('.arena-dropdown-drop').click({ force: true })
  cy.get('.arena-modal-overlay').invoke('css', 'visibility', 'hidden')
})

Cypress.Commands.add('goToDirectMessageTab', () => {
  cy.contains('Go Direct').click({ force: true })
  cy.wait(2000, { log: false })
  cy.get('.chat-room--members--list--user--moderator--label')
    .first()
    .click({ force: true })
  cy.wait(3000, { log: false })
})

Cypress.Commands.add('sendDirectMessage', (message) => {
  cy.findAllByTestId('react-input-emoji--input')
    .last()
    .invoke('css', 'visibility', 'visible')
    .type(message, {
      force: true,
    })
  cy.findAllByTestId('live-chat-room-input--btn').last().click({ force: true })
  cy.wait(5000, { log: false })
})
