describe('Check "moderators only" private chat messages within a custom live-chat', () => {
  beforeEach(() => {
    cy.visit(
      'https://62c7ceb65521e247db8bf23d--lambent-caramel-a02409.netlify.app/'
    )
    cy.clearCookies()
  })

  it('TC06 - Direct messages to moderators only', () => {
    // TODO: Find the slow API call and properly wait for it to finish
    // All cy.wait() commands should be replaced with cy.waitForApi()

    cy.contains('Direct').click()
    cy.contains('Start chatting only with moderators').should('be.visible')
    cy.signUpFromSettingsMenu().as('signUp')

    cy.contains('Go Direct').click({ force: true })
    cy.wait(2000)
    cy.contains('Mod').first().click({ force: true })
    cy.wait(3000)
    cy.findAllByTestId('react-input-emoji--input')
      .last()
      .invoke('css', 'visibility', 'visible')
      .type('Moderator test message', {
        force: true,
      })
    cy.findAllByTestId('live-chat-room-input--btn')
      .last()
      .click({ force: true })
    cy.wait(5000)
    cy.get('.live-chat-room--messages')
      .children()
      .eq(2)
      .should('contain', 'Moderator test message')
    cy.contains('Live Chat').click()
    cy.findAllByText('Moderator test message').should('not.exist')
  })
})
