import { lazy } from 'react';

export const ProfilePageAsync = lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return await import('./ProfilePage')
});
