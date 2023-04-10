/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { CommentCard } from './CommentCard';

export default {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args: any) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  comment: {
    id: '1',
    text: 'Hello comment',
    user: { id: '1', username: 'admin' }
  }
};
Normal.decorators = []

export const isLoading = Template.bind({});
isLoading.args = {
  comment: {
    id: '1',
    text: 'Hello comment',
    user: { id: '1', username: 'admin' }
  },
  isLoading: true
};
isLoading.decorators = []