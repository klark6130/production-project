import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 500))
  return await import('./ArticleDetailsPage')
});
