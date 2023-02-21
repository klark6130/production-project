/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import { ComponentStory, ComponentMeta, addDecorator } from '@storybook/react';

import { Modal } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
  title: 'shared/Modal',
  component: Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo qui in repudiandae porro ullam illum perspiciatis aliquam cumque ea, magni iusto eos quibusdam! Ipsa harum, quia in aperiam voluptatum quae.'
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo qui in repudiandae porro ullam illum perspiciatis aliquam cumque ea, magni iusto eos quibusdam! Ipsa harum, quia in aperiam voluptatum quae.'
};

Dark.decorators = [ThemeDecorator(Theme.DARK)]
