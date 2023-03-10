/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { [FTName] } from './[FTName]';

export default {
  title: 'pages/[FTName]',
  component: [FTName],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof [FTName]>;

const Template: ComponentStory<typeof [FTName]> = (args: any) => <[FTName] {...args} />;

export const Normal = Template.bind({});
Normal.args = {
};
Normal.decorators = []