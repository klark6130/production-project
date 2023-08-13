const firstUpper = require('../../firstUpper.js');

module.exports = (layer, sliceName) => {
  return `/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ${firstUpper(sliceName)}Component } from './${firstUpper(sliceName)}';

export default {
  title: '${layer}/${firstUpper(sliceName)}/${firstUpper(sliceName)}',
  component: ${firstUpper(sliceName)}Component,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ${firstUpper(sliceName)}Component>;

const Template: ComponentStory<typeof ${firstUpper(sliceName)}Component> = (args: any) => <${firstUpper(sliceName)}Component {...args} />;

export const Normal = Template.bind({});
Normal.args = {
};
Normal.decorators = []
`
}