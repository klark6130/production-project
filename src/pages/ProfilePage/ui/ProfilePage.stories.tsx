/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ProfilePage from './ProfilePage';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Theme } from '@/shared/const/theme';

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
        avatar: 'https://www.w3schools.com/howto/img_avatar.png'
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
