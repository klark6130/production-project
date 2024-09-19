/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { AdditionalInfoContainer } from './AdditionalInfoContainer';

export default {
  title: 'pages/AdditionalInfoContainer',
  component: AdditionalInfoContainer,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof AdditionalInfoContainer>;

const Template: ComponentStory<typeof AdditionalInfoContainer> = (args: any) => <AdditionalInfoContainer {...args} />;

export const Normal = Template.bind({});
Normal.args = {
};
Normal.decorators = []