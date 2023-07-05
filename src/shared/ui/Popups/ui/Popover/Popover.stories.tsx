/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Popover } from './Popover';

export default {
  title: 'pages/Popover',
  component: Popover,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args: any) => <Popover {...args} />;

export const Normal = Template.bind({});
Normal.args = {
};
Normal.decorators = []