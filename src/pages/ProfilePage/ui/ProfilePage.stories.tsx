/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ProfilePage from './ProfilePage';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args: any) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {
};
Normal.decorators = [
  StoreDecorator({
    profile: {
      form: {
        age: 31,
        username: 'admin',
        country: Country.China,
        lastname: 'B.',
        first: 'Dmitry',
        city: 'Krasnodar',
        currency: Currency.EUR,
        avatar: 'https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg'
      }
    }
  })
]

export const Dark = Template.bind({});
Dark.args = {
};

Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({})
]
