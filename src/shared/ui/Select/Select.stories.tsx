/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import { ComponentStory, ComponentMeta, addDecorator } from '@storybook/react';
import { Select } from './Select';

export default {
  title: 'widget/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    to: '/'
  }
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Укажите знач.',
  options: [
    { value: '123', content: 'Первый' },
    { value: '1234', content: 'Второй' }
  ]
};
