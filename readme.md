# Arena Live Chat

![Cypress Tests](https://github.com/benjaminpinto/arena-live-chat/actions/workflows/cypress-tests.yml/badge.svg)

This project is the result of a code challenge that demands the use of Cypress to automate tests upon [Arena Live Chat](https://go.arena.im/chat/cesar/Xed5mok).

To write these tests, I've used a few plugins to extend Cypress capabilities:

- [cypress-testing-library](https://testing-library.com/docs/cypress-testing-library/intro/);
- [faker-js](https://fakerjs.dev/);
- [cypress-iframe](https://www.npmjs.com/package/cypress-iframe)

## Pre-requirements

It is required to have Node.js and npm installed to run this project.

> I've used versions `v16.15.0` and `8.5.5` of Node.js and npm, respectively. I recommend you to use the same or later versions.

## Installation

Run `npm install` (or `npm i` for the short version) to install the dev dependencies.

## Tests

Run `npm test` (or `npm t` for the short version) to run the test in headless mode.

Or, run `npm run cy:open` to open Cypress in interactive mode.

> **Note:** This project uses fake data to perform tests, so the file `cypress.env.json` is being versioned. With sensible data, this doesn't should happen.

> **Important:** This project uses Github actions to implement a simple CI workflow. If you want to clone it and run at your own repository, remember to update project's ID at [`cypress.config.js`](./cypress.config.js) file, and set your CYPRESS_RECORD_KEY at Github secrets.

## About the project structure

- Spec files are localized at [`cypress/e2e`](/cypress/e2e/) folder;
- Custom commands are organized at [`support`](cypress/support) folder;
- Test scenarios TC06 and TC07 demands the live chat being published in a different webpage, through an iframe. Attending this requirement, it's available at this [Netlify page](https://62c7ceb65521e247db8bf23d--lambent-caramel-a02409.netlify.app/).

## Test scenarios

#### Login functionality

| ID   | Scenario                                    | Automated? | Status     | Issue? | Obs |
| ---- | ------------------------------------------- | :--------: | ---------- | :----: | :-: |
| TC01 | Check customer login with valid credentials |   ✅ Yes   | 🟢 Passing |   -    |  -  |
| TC02 | Check customer login with invalid password  |   ✅ Yes   | 🟢 Passing |   -    |  -  |

#### Send regular message functionality

| ID   | Scenario                  | Automated? | Status     | Issue? | Obs |
| ---- | ------------------------- | :--------: | ---------- | :----: | :-: |
| TC03 | Send message              |   ✅ Yes   | 🟢 Passing |   -    |  -  |
| TC04 | React to a message        |   ✅ Yes   | 🟢 Passing |   -    |  -  |
| TC05 | Send a message with emoji |   ✅ Yes   | 🟢 Passing |   -    |  -  |

#### Send direct messages to moderators through iFrames embed

| ID   | Scenario                                 | Automated? | Status     | Issue? |                                               Obs                                                |
| ---- | ---------------------------------------- | :--------: | ---------- | :----: | :----------------------------------------------------------------------------------------------: |
| TC06 | Direct messages to moderators only (E2E) |   ✅ Yes   | 🟢 Passing |   -    | Some API responses are making tests flaky.There are a few cy.wait() that should be removed asap. |
| TC07 | Direct messages to moderators only (API) |   ✅ Yes   | 🟢 Passing |   -    |                                                -                                                 |

---

This project was created by [Benjamin Pinto](https://www.linkedin.com/in/benjamin-pinto/).
