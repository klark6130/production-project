/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="cypress" />
// https://on.cypress.io/custom-commands
// -- This is a parent command --

import { login } from './commands/login';

Cypress.Commands.add('login', login)

declare global {
  namespace Cypress {
    interface Chainable {
      login: (username: string, password: string) => Chainable<void>
    }
  }
}

export {};