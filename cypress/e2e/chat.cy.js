describe('Check chat functionality', () => {
  const emojiButton = '.react-input-emoji--button'
  const chatInput = 'react-input-emoji--input'
  const chatSendButton = '.arena-icon-send'
  const chatHistory = '.chat-room-message-list--animation'
  const heartIcon =
    '.arena-chat-widget--message-content-reactions-icon-react-heart'
  const emojiList = '.emoji-mart-category-list'

  beforeEach(() => {
    cy.visit('/')
    cy.clearCookies()
  })

  it('TC03 - Send message', () => {
    const message = 'sending a message from cypress'

    cy.loginFromSettingsMenu()
    cy.findByTestId(chatInput).type(message)
    cy.get(chatSendButton).click()
    cy.get(chatHistory).children().last().should('contain', message)
  })

  it('TC04 - React to a message', () => {
    cy.get(chatHistory)
      .children()
      .last()
      .find(heartIcon)
      .click({ force: true })
      .then(($el) => {
        cy.wrap($el).should('have.class', 'jlvFBu')
      })
  })

  it('TC05 - Send a message with emoji', () => {
    cy.loginFromSettingsMenu()
    cy.get(emojiButton).click()
    cy.get(emojiList).children().first().click()
    cy.get(chatSendButton).click()
    cy.get(chatHistory)
      .children()
      .last()
      .find('img')
      .should('have.attr', 'alt', '😀')
  })
})
