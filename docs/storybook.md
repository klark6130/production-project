## Storybook

В проекте для каждого компонента описываются стори-кейсы. Запросы на сервер мокаются с помощью storybook-addon-mock

Файл со сторикейсами находятся рядом с компонентами с расширением .stories.tsx

Запустить сторибук можно командой:
- `npm run storybook`
- 
Подробнее о [Storybook](https://storybook.js.org/docs/react/get-started/install/)

Пример:
```typescript tsx
import React from 'react';
import { ComponentStory, ComponentMeta, addDecorator } from '@storybook/react';

import { Button, ButtonSize, ButtonTheme } from './Button';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text'
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR_INVERTED
};
```