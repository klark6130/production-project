/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="cypress" />
// https://on.cypress.io/custom-commands
// -- This is a parent command --

import * as commonCommands from './commands/common';
import * as profileCommands from './commands/profile';
import * as articleCommands from './commands/article';
import * as commentCommands from './commands/comments';
import * as ratingCommands from './commands/rating';

Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(profileCommands);
Cypress.Commands.addAll(articleCommands);
Cypress.Commands.addAll(commentCommands);
Cypress.Commands.addAll(ratingCommands);

export {};