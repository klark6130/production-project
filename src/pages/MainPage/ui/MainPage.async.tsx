import { lazy } from 'react';

export const MainPageAsync = lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 100))
  return await import('./MainPage')
});
