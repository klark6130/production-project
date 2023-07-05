/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { CommentList } from './CommentList';

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args: any) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  comments: [
    {
      id: '1',
      text: 'comment',
      user: { id: '1', username: 'Dima' }
    },
    {
      id: '2',
      text: 'comment 2',
      user: { id: '2', username: 'Admin' }
    }
  ]
};
Normal.decorators = []

export const isLoading = Template.bind({});
isLoading.args = {
  comments: [],
  isLoading: true
};
isLoading.decorators = []