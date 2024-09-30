/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { CommentCard } from './CommentCard';
import { FeaturesDecorator } from '@/shared/config/storybook/FeatureFlags/FeatureFlags';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args: any) => (
    <CommentCard {...args} />
);

const normalArgs = {
    comment: {
        id: '1',
        text: 'Hello comment',
        user: { id: '1', username: 'admin' },
    },
};

export const Normal = Template.bind({});
Normal.args = normalArgs;
Normal.decorators = [];

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = normalArgs;
NormalRedesigned.decorators = [NewDesignDecorator];

export const IsLoading = Template.bind({});
IsLoading.args = normalArgs;
IsLoading.decorators = [];
