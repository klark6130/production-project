import { StateSchema } from '@/app/providers/StoreProvider';
import { EditableProfileCard } from '../../src/features/editableProfileCard';
import { TestProvider } from '../../src/shared/lib/tests/componentRender/componentRender';
import { DeepPartial } from 'redux';

const USER_ID = '1';

describe('EditableProfileCard.cy.tsx', () => {
  it('playground', () => {
    cy.intercept('get', '**/profile/*', { fixture: 'profile.json' })
    const initialState: DeepPartial<StateSchema> = {
      user: {
        authData: {
          id: USER_ID,
          username: 'admin'
        }
      }
    }
    cy.mount(
      <TestProvider options={{
        initialState
      }}
      >
        <EditableProfileCard id={USER_ID}/>
      </TestProvider> 
    );

    // описавать тест кейс на полноценное редактирование профиля
  })
})