/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticleRating from './ArticleRating';
import withMock from 'storybook-addon-mock';

export default {
  title: 'features/ArticleRating',
  component: ArticleRating,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  decorators: [withMock]
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args: any) => <ArticleRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  articleId: '1'
};

Normal.parameters = {
  mockData: [
    {
      url: __API__ + '/article-ratings?articleId=1&userId=1',
      method: 'GET',
      status: 200,
      response: [{
        id: '1',
        rate: 4,
        feedback: 'Хорошо',
        userId: 1,
        articleId: 1
      }]
    }
  ]
}

Normal.decorators = [
  StoreDecorator({
    user: {
      authData: {
        id: '1',
        username: 'admin'
      }
    }
  })
]