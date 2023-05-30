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
  },
  decorators: [
    Story => <div style={{ padding: 100 }}><Story/></div>
  ]
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args: any) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  value: '123',
  items: [
    {
      content: '12431241', value: '123'
    },
    {
      content: '12431241', value: '124'
    },
    {
      content: '12431241', value: '125'
    }
  ]
};
Normal.decorators = [];

export const TopLeft = Template.bind({});
TopLeft.args = {
  direction: 'top left',
  value: '123',
  items: [
    {
      content: '12431241', value: '123'
    },
    {
      content: '12431241', value: '124'
    },
    {
      content: '12431241', value: '125'
    }
  ]
};
TopLeft.decorators = []

export const TopRight = Template.bind({});
TopRight.args = {
  direction: 'top right',
  value: '123',
  items: [
    {
      content: '12431241', value: '123'
    },
    {
      content: '12431241', value: '124'
    },
    {
      content: '12431241', value: '125'
    }
  ]
};
TopRight.decorators = []

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  direction: 'bottom left',
  value: '123',
  items: [
    {
      content: '12431241', value: '123'
    },
    {
      content: '12431241', value: '124'
    },
    {
      content: '12431241', value: '125'
    }
  ]
};
BottomLeft.decorators = []

export const BottomRight = Template.bind({});
BottomRight.args = {
  direction: 'bottom right',
  value: '123',
  items: [
    {
      content: '12431241', value: '123'
    },
    {
      content: '12431241', value: '124'
    },
    {
      content: '12431241', value: '125'
    }
  ]
};
BottomRight.decorators = []