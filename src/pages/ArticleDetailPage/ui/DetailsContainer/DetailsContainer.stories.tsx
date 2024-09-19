/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { DetailsContainer } from './DetailsContainer';

export default {
  title: 'pages/DetailsContainer',
  component: DetailsContainer,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof DetailsContainer>;

const Template: ComponentStory<typeof DetailsContainer> = (args: any) => <DetailsContainer {...args} />;

export const Normal = Template.bind({});
Normal.args = {
};
Normal.decorators = []