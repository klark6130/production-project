import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 500))
  return await import('./ArticleEditPage')
});
