describe('Check login functionality', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.clearCookies()
  })

  it('TC01 - Check customer login with valid credentials', () => {
    cy.loginFromSettingsMenu()
    cy.get('.live-event-login--user--photo').should('exist').and('be.visible')
  })

  it('TC02 - Check customer login with invalid password', () => {
    cy.intercept('POST', '**/profile/**', { failOnStatusCode: false }).as(
      'auth'
    )
    cy.loginFromSettingsMenu(undefined, '654321')
    cy.get('.live-event-login--user--photo').should('not.exist')
  })
})
