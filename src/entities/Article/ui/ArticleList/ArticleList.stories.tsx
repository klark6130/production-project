/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleList } from './ArticleList';
import { ArticleView } from '../../model/consts/articleConsts';

export default {
  title: 'entities/Article/ArticleList',
  component: ArticleList,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args: any) => <ArticleList {...args} />;

export const isLoading = Template.bind({});
isLoading.args = {
  isLoading: true,
  articles: [],
  view: ArticleView.LIST
};
isLoading.decorators = []