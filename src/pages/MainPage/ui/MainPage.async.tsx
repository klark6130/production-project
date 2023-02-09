import { lazy } from 'react';

export const MainPageAsync = lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return await import('./MainPage')
});
