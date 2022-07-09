describe('Check functionalities through API ', () => {
  it('TC07.1 - Check API auth with valid credentials', () => {
    cy.loginFromApi().then((response) => {
      expect(response.status).to.equal(200)
      expect(response.body.email).to.equal(Cypress.env('apiEmail'))
    })
  })

  it('TC07.2 - Check API auth with invalid credentials', () => {
    cy.loginFromApi('wrong@email.com', 'wrong_pass').then((response) => {
      expect(response.status).to.equal(400)
      expect(response.body.error.message).to.equal('EMAIL_NOT_FOUND')
    })
  })
  it('TC07.3 - Create a new live chat through API', () => {
    const { arenaChat } = require('../../fixtures/arenaChat.js')

    cy.requestGraphQL(
      arenaChat.query,
      arenaChat.operationName,
      arenaChat.variables
    ).then((response) => {
      expect(response.status).to.eq(200)
      console.log(response.body)
    })
  })
})
