import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(async () => {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return await import('./LoginForm');
});
