/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import { ComponentStory, ComponentMeta, addDecorator } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Navbar } from './Navbar';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import withMock from 'storybook-addon-mock';

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  decorators: [withMock]
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {
};
Light.decorators = [StoreDecorator({

})]

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({

  })
]

export const AuthUser = Template.bind({});
AuthUser.args = {
};
AuthUser.decorators = [StoreDecorator({
  user: { authData: {} }
})]

AuthUser.parameters = {
  mockData: [
    {
      url: __API__ + '/notifications',
      method: 'GET',
      status: 200,
      response: [
        {
          id: '1',
          title: 'title',
          description: 'description'
        },
        {
          id: '2',
          title: 'title 2',
          description: 'description 2'
        }
      ]
    }
  ]
};
