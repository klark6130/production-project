import { addDecorator } from '@storybook/react';

import { StoreDecorator } from '../../src/shared/config/storybook/StoreDecorator/StoreDecorator';
import {StyleDecorator} from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import {ThemeDecorator} from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from '../../src/shared/const/theme';
import {RouterDecorator} from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // layout: 'fullscreen' // для отображения в storybook на полный экран
  themes: {
    default: 'light',
    list: [
      { name: 'light', class: Theme.LIGHT, color: '#ffffff' },
      { name: 'dark', class: Theme.DARK, color: '#000000' },
      { name: 'orange', class: Theme.ORANGE, color: '#ffb005' }
    ],
    // Для того чтобы выбранная тема применялась к каждому компоненту Сторибук. Нужно в preview.js :
    // 1) Выключить ThemeDecorator
    // 2) Навесть дополнительно 'app' класс в списке тем 
  },
}


addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator);
// это декоратор тут не должен быть, но всё из-за ThemeDecorator, который обращается в store!!!!!
addDecorator(StoreDecorator({}));

