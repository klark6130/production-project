import { lazy } from 'react';

export const ArticlesPageAsync = lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 500))
  return await import('./ArticlesPage')
});
