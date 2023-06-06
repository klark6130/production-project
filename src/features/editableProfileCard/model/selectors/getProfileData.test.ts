import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileData, getProfileError, getProfileForm, getProfileIsLoading, getProfileReadonly, getProfileValidateErrors } from './getProfileData';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../types/editableProfileCardSchema';

describe('getProfileData.test', () => {
  describe('getProfileData', () => {
    test('should return data', () => {
      const data = {
        age: 31,
        username: 'admin',
        country: Country.China,
        lastname: 'B.',
        first: 'Dmitry',
        city: 'Krasnodar',
        currency: Currency.EUR
      }

      const state: DeepPartial<StateSchema> = {
        profile: {
          data
        }
      }
      expect(getProfileData(state as StateSchema)).toEqual(data);
    })
    test('should work with empty state', () => {
      const state: DeepPartial<StateSchema> = {};
      expect(getProfileData(state as StateSchema)).toEqual(undefined);
    })
  });

  describe('getProfileError', () => {
    test('should return error', () => {

      const state: DeepPartial<StateSchema> = {
        profile: {
          error: '123'
        }
      }
      expect(getProfileError(state as StateSchema)).toEqual('123');
    })
    test('should work with empty state', () => {
      const state: DeepPartial<StateSchema> = {};
      expect(getProfileError(state as StateSchema)).toEqual(undefined);
    })
  });

  describe('getProfileIsLoading', () => {
    test('should return isLoading', () => {

      const state: DeepPartial<StateSchema> = {
        profile: {
          isLoading: true
        }
      }
      expect(getProfileIsLoading(state as StateSchema)).toBe(true)
    })
    test('should work with empty state', () => {
      const state: DeepPartial<StateSchema> = {};
      expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
    })
  });

  describe('getProfileReadonly', () => {
    test('should return Readonly', () => {

      const state: DeepPartial<StateSchema> = {
        profile: {
          readonly: true
        }
      }
      expect(getProfileReadonly(state as StateSchema)).toBe(true)
    })
    test('should work with empty state', () => {
      const state: DeepPartial<StateSchema> = {};
      expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
    })
  });

  describe('getProfileValidateErrors', () => {
    test('should return ValidateErrors', () => {

      const state: DeepPartial<StateSchema> = {
        profile: {
          validateError: [ValidateProfileError.INCORRECT_COUNTRY, ValidateProfileError.SERVER_ERROR]
        }
      }
      expect(getProfileValidateErrors(state as StateSchema)).toEqual([ValidateProfileError.INCORRECT_COUNTRY, ValidateProfileError.SERVER_ERROR])
    })
    test('should work with empty state', () => {
      const state: DeepPartial<StateSchema> = {};
      expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    })
  });

  describe('getProfileForm', () => {
    test('should return form', () => {

      const data = {
        age: 31,
        username: 'admin',
        country: Country.China,
        lastname: 'B.',
        first: 'Dmitry',
        city: 'Krasnodar',
        currency: Currency.EUR
      };

      const state: DeepPartial<StateSchema> = {
        profile: {
          form: data
        }
      }
      expect(getProfileForm(state as StateSchema)).toEqual(data)
    })
    test('should work with empty state', () => {
      const state: DeepPartial<StateSchema> = {};
      expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    })
  });
});
