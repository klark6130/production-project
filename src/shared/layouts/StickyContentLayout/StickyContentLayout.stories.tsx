/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { StickyContentLayout } from './StickyContentLayout';

export default {
    title: 'shared/layouts/StickyContentLayout',
    component: StickyContentLayout,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof StickyContentLayout>;

const Template: ComponentStory<typeof StickyContentLayout> = (args: any) => (
    <StickyContentLayout {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [];
