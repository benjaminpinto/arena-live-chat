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

Cypress.Commands.add('requestGraphQL', (query, operationName, variables) => {
  const createLiveChatURL = Cypress.env('apiCreateLiveChatURL')
  let token = ''

  cy.loginFromApi().then((response) => {
    token = `Bearer ${response.body.idToken}`
    cy.request({
      method: 'POST',
      url: createLiveChatURL,
      body: {
        operationName: operationName,
        variables: variables,
        query: query,
      },
      headers: {
        Authorization: token,
        'content-type': 'application/json',
      },
    })
  })
})
