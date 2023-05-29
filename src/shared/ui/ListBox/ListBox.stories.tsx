/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args: any) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  
};
Normal.decorators = []