/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { NotificationList } from './NotificationList';
import withMock from 'storybook-addon-mock';

export default {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  decorators: [withMock]
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args: any) => <NotificationList {...args} />;

export const Normal = Template.bind({});
Normal.parameters = {
  mockData: [
    {
      url: __API__ + '/notifications',
      method: 'GET',
      status: 200,
      response: [
        {
          id: '1',
          title: 'title',
          description: 'description'
        },
        {
          id: '2',
          title: 'title 2',
          description: 'description 2'
        }
      ]
    }
  ]
};
Normal.decorators = [
  StoreDecorator({})
]