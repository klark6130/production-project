/* eslint-disable @typescript-eslint/no-namespace */
import { User } from '../../../src/entities/User';

export const updateProfile = (firstname: string, lastname: string) => {
  cy.getByTestId('EditableProfileCardHeader.EditButton').click();
  cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
  cy.getByTestId('ProfileCard.lastname').clear().type(lastname)
  cy.getByTestId('EditableProfileCardHeader.SaveButton').click()
}

export const resetProfile = (profileId: string) => {
  cy.request({
    method: 'PUT',
    url: 'http://localhost:8000/profile/' + profileId,
    headers: { Authorization: 'asasda' },
    body: {
      id: '4',
      first: 'Test',
      lastname: 'user',
      age: 36,
      currency: 'RUB',
      country: 'Russia',
      city: 'Moscow',
      username: 'testuser',
      avatar: 'https://e1.pngegg.com/pngimages/356/954/png-clipart-mr-robot-tv-series-folder-icon-2015-mr-robot-256x256-thumbnail.png'
    }
  })
}

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile: (firstname: string, lastname: string) => Chainable<void>
      resetProfile: (profileId: string) => Chainable<User>
    }
  }
}