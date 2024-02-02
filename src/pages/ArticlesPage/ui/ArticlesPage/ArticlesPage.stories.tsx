/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticlesPage from './ArticlesPage';
import { features } from 'process';

export default {
    title: 'pages/Article/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args: any) => (
    <ArticlesPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({
        user: {
            authData: {
                jsonSettings: {
                    isArticlesPageWasOpened: true,
                },
            },
        },
    }),
];

export const NormalHasBeenNotOpened = Template.bind({});
NormalHasBeenNotOpened.args = {};
NormalHasBeenNotOpened.parameters = {
    mockData: [
        {
            url: __API__ + '/users/1',
            method: 'PATCH',
            status: 200,
            response: {
                id: '1',
                username: 'user',
                password: '123',
                roles: [],
                features: {
                    isArticlesPageWasOpened: true,
                },
            },
        },
    ],
};
NormalHasBeenNotOpened.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                jsonSettings: {
                    isArticlesPageWasOpened: false,
                },
            },
        },
    }),
];
