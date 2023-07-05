import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginError, getLoginIsLoading, getLoginPassword, getLoginUsername } from './getLoginState';

describe('getLoginState.test', () => {
  describe('getLoginError', () => {
    test('should return error', () => {
      const state: DeepPartial<StateSchema> = {
        loginForm: {
          error: 'error'
        }
      }
      expect(getLoginError(state as StateSchema)).toEqual('error');
    })
    test('should work with empty state', () => {
      const state: DeepPartial<StateSchema> = {};
      expect(getLoginError(state as StateSchema)).toEqual(undefined);
    })
  });

  describe('getLoginIsLoading', () => {
    test('should return true', () => {
      const state: DeepPartial<StateSchema> = {
        loginForm: {
          isLoading: true
        }
      }
      expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    })
    test('should work with empty state', () => {
      const state: DeepPartial<StateSchema> = {};
      expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    })
  });

  describe('getLoginUsername', () => {
    test('should return username', () => {
      const state: DeepPartial<StateSchema> = {
        loginForm: {
          username: 'Dmitry'
        }
      }
      expect(getLoginUsername(state as StateSchema)).toEqual('Dmitry');
    })
    test('should work with empty state', () => {
      const state: DeepPartial<StateSchema> = {};
      expect(getLoginUsername(state as StateSchema)).toEqual('');
    })
  });

  describe('getLoginPassword', () => {
    test('should return username', () => {
      const state: DeepPartial<StateSchema> = {
        loginForm: {
          password: '123123'
        }
      }
      expect(getLoginPassword(state as StateSchema)).toEqual('123123');
    })
    test('should work with empty state', () => {
      const state: DeepPartial<StateSchema> = {};
      expect(getLoginPassword(state as StateSchema)).toEqual('');
    })
  });
});
