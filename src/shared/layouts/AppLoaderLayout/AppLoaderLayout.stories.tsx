/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { AppLoaderLayout } from './AppLoaderLayout';

export default {
    title: 'shared/layouts/AppLoaderLayout',
    component: AppLoaderLayout,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppLoaderLayout>;

const Template: ComponentStory<typeof AppLoaderLayout> = (args: any) => (
    <AppLoaderLayout {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [];
