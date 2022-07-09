Cypress.Commands.add(
  'loginFromApi',
  (email = Cypress.env('apiEmail'), password = Cypress.env('apiPassword')) => {
    const authURL = Cypress.env('apiAuthURL')
    const payload = {
      email: email,
      password: password,
      returnSecureToken: true,
    }

    cy.request({
      method: 'POST',
      url: authURL,
      body: payload,
      failOnStatusCode: false,
    })
  }
)

Cypress.Commands.add('getArenaToken', () => {
  cy.loginFromApi().then((authResponse) => {
    const { arenaToken } = require('../fixtures/arenaToken.js')
    arenaToken.input.firebaseToken = authResponse.body.idToken
    arenaToken.input.id = authResponse.body.localId

    cy.request({
      method: 'POST',
      url: Cypress.env('graphQL_Endpoint'),
      body: {
        query: arenaToken.query,
        variables: { input: arenaToken.input },
      },
    }).then((response) => {
      return response.body
    })
  })
})

Cypress.Commands.add(
  'requestGraphQL',
  (query, variables, operationName, url = Cypress.env('graphQL_Endpoint')) => {
    cy.getArenaToken().then((token) => {
      const arenaToken = `Bearer ${token.data.login.arenaToken}`

      cy.request({
        method: 'POST',
        url: url,
        body: {
          query: query,
          variables: variables,
          operationName: operationName,
        },
        headers: {
          Authorization: arenaToken,
        },
      })
    })
  }
)

// cy.request({
//   method: 'POST',
//   url: url,
//   body: {
//     operationName: operationName,
//     variables: variables,
//     query: query,
//   },
//   headers: {
//     Authorization: token,
//     'content-type': 'application/json',
//   },
// })
