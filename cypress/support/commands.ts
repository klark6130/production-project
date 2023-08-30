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

// 
// авто считывание данных для фикстур
// Cypress.Commands.overwrite('mount') // для теста компонентов

// авто считывание данных для фикстур
// Cypress.Commands.overwrite('intercept', () => {
//   const FIXTURE_MODE = process.env.FIXTURE_MODE;
//   if(FIXTURE_MODE === 'READ'){
//     readFixttures(fileName)
//     // считывание fixtures из папки fixtures
//   }
//   if(FIXTURE_MODE === 'WRITE'){
//     // const fixtureName = req.Method + req.url + hash (req.body);
//     // createFIXTURES(fixtureName)
//   }
// })

export {};