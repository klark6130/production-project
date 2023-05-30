/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ArticleEditPage from './ArticleEditPage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'pages/ArticleEditPage',
  component: ArticleEditPage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = (args: any) => <ArticleEditPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {
};
Normal.decorators = [
  StoreDecorator({})
]