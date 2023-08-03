/* eslint-disable bastrikov-da-eslint-plugin/layer-imports */
/* eslint-disable react/display-name */
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';
import { Story } from '@storybook/react';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <StoryComponent/>
      </div>
    </ThemeProvider>
  )
}
