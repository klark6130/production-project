/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Code } from './Code';

export default {
  title: 'shared/Code',
  component: Code,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args: any) => <Code {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  // eslint-disable-next-line @typescript-eslint/quotes
  text: "export default {\n" +
    " title: 'pages/Code',\n" +
    ' component: Code,\n' +
    ' argTypes: {\n' +
    "  backgroundColor: { control: 'color' }\n" +
    ' }\n' +
    '} as ComponentMeta<typeof Code>;\n'
};
Normal.decorators = []