/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ProfileCardRedesigned } from './ProfileCardRedesigned';

export default {
    title: 'entities/ProfileCard/ProfileCardRedesigned',
    component: ProfileCardRedesigned,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCardRedesigned>;

const Template: ComponentStory<typeof ProfileCardRedesigned> = (args: any) => (
    <ProfileCardRedesigned {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [];
