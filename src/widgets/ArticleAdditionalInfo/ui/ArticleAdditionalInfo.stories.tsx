/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleAdditionalInfo } from './ArticleAdditionalInfo';

export default {
    title: 'widgets/ArticleAdditionalInfo',
    component: ArticleAdditionalInfo,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleAdditionalInfo>;

const Template: ComponentStory<typeof ArticleAdditionalInfo> = (args: any) => (
    <ArticleAdditionalInfo {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    author: {
        id: '1',
        username: 'Test',
    },
    views: 100,
};
Normal.decorators = [];
