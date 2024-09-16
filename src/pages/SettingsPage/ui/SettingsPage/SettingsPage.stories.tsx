/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import SettingsPage from './SettingsPage';

export default {
    title: 'pages/SettingsPage/SettingsPage',
    component: SettingsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SettingsPage>;

const Template: ComponentStory<typeof SettingsPage> = (args: any) => (
    <SettingsPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [];
