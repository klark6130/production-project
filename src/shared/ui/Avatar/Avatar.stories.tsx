/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import { ComponentStory, ComponentMeta, addDecorator } from '@storybook/react';
import { Avatar } from './Avatar';

import AvatarImg from './for_storybook.png';

export default {
  title: 'widget/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    to: '/'
  }
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 150,
  src: AvatarImg
};

export const Small = Template.bind({});
Small.args = {
  size: 50,
  src: AvatarImg
};