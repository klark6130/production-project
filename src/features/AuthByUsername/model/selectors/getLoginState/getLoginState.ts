import { StateSchema } from '@/app/providers/StoreProvider';

export const getLoginState = (state: StateSchema) => {
  return state?.loginForm;
}

export const getLoginUsername = (state: StateSchema) => {
  return state?.loginForm?.username || '';
}

export const getLoginPassword = (state: StateSchema) => {
  return state?.loginForm?.password || '';
}

export const getLoginIsLoading = (state: StateSchema) => {
  return state?.loginForm?.isLoading || false;
}

export const getLoginError = (state: StateSchema) => {
  return state?.loginForm?.error || undefined;
}