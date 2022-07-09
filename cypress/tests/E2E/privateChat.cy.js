describe('Check "moderators only" private chat messages within a custom live-chat', () => {
  beforeEach(() => {
    cy.visit(
      'https://62c7ceb65521e247db8bf23d--lambent-caramel-a02409.netlify.app/'
    )
    cy.clearCookies()
  })

  it.only('TC06 - Direct messages to moderators only', () => {
    const message = 'Moderator test message'

    cy.contains('Direct').click()
    cy.contains('Start chatting only with moderators').should('be.visible')

    cy.signUpFromSettingsMenu()
    cy.goToDirectMessageTab()
    cy.sendDirectMessage(message)

    cy.get('.live-chat-room--messages')
      .children()
      .contains(message)
      .should('exist')

    cy.contains('Live Chat').click()
    cy.findAllByText(message).should('not.exist')
  })
})
