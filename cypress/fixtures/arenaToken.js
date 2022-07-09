export const arenaToken = {
  query:
    'mutation ($input: LoginInput!) {  login(input: $input) {    user {      _id      name      phoneNumber      jobTitle      image      displayEditorName      email      navigationTour      liveblogTour      chatTour      isAdmin      accounts {        _id        name        createdAt        companySize        autoJoin        companySize        widgetCreated        domains        prefCategories        organizations {          _id          name          sites {            _id            name            image            slug            blocked            blockedReason            websiteUrl          }        }      }      permissions {        account        events        eventsCreatedBy        organization        role        site      }      currentAccount {        accountId        organizationId        siteId      }    }    arenaToken    country  }}',
  input: { id: '', firebaseToken: '' },
}
