/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import { ComponentStory, ComponentMeta, addDecorator } from '@storybook/react';

import { ProfileCard } from './ProfileCard';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { FeaturesDecorator } from '@/shared/config/storybook/FeatureFlags/FeatureFlags';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

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

const primaryArgs = {
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

export const Primary = Template.bind({});
Primary.args = primaryArgs;
Primary.decorators = [
    StoreDecorator({
        loginForm: { username: 'adminnnn', password: '123' },
    }),
];

export const PrimaryRedesigned = Template.bind({});
PrimaryRedesigned.args = primaryArgs;
PrimaryRedesigned.decorators = [
    StoreDecorator({
        loginForm: { username: 'adminnnn', password: '123' },
    }),
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
];

export const PrimaryRedesignedLight = Template.bind({});
PrimaryRedesignedLight.args = primaryArgs;
PrimaryRedesignedLight.decorators = [
    StoreDecorator({
        loginForm: { username: 'adminnnn', password: '123' },
    }),
    NewDesignDecorator,
    ThemeDecorator(Theme.LIGHT),
];

export const withError = Template.bind({});
withError.args = {
    error: 'Error',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
