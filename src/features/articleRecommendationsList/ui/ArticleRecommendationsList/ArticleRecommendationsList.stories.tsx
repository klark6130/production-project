/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import withMock from 'storybook-addon-mock';
import { Article } from '@/entities/Article';

export default {
  title: 'features/ArticleRecommendationsList/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  decorators: [withMock]
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args: any) => <ArticleRecommendationsList {...args} />;

const article: Article = {
  id: '1',
  img: '',
  createdAt: '2020-20-10',
  views: 777,
  user: { id: '1', username: '123' },
  blocks: [],
  type: [],
  title: 'Mocked article',
  subtitle: 'sub title'
}

export const Normal = Template.bind({});
Normal.decorators = [
  StoreDecorator({})
]
Normal.parameters = {
  mockData: [
    {
      url: __API__ + '/articles?_limit=3',
      method: 'GET',
      status: 200,
      response: [
        { ...article, id: '1' },
        { ...article, id: '2' },
        { ...article, id: '3' }
      ]
    }
  ]
}
