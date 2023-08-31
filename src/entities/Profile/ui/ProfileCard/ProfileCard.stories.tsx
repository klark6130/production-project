/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import { ComponentStory, ComponentMeta, addDecorator } from '@storybook/react';

import { ProfileCard } from './ProfileCard';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    data: {
        age: 31,
        username: 'admin',
        country: Country.China,
        lastname: 'B.',
        first: 'Dmitry',
        city: 'Krasnodar',
        currency: Currency.EUR,
        avatar: 'https://www.w3schools.com/howto/img_avatar.png',
    },
};
Primary.decorators = [
    StoreDecorator({
        loginForm: { username: 'adminnnn', password: '123' },
    }),
];

export const withError = Template.bind({});
withError.args = {
    error: 'Error',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
