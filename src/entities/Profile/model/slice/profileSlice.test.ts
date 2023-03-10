import { Country } from 'entities/Country';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { Currency } from 'entities/Currency';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

describe('profileSlice.test', () => {
  const data = {
    age: 31,
    username: 'admin',
    country: Country.China,
    lastname: 'B.',
    first: 'Dmitry',
    city: 'Krasnodar',
    currency: Currency.EUR
  }

  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(
      state as ProfileSchema, 
      profileActions.setReadonly(true)
    )).toEqual({ readonly: true });
  })

  test('test updateProfile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: 'admin' } };
    expect(profileReducer(
      state as ProfileSchema, 
      profileActions.updateProfile({ username: 'admin1' })
    )).toEqual({
      form: { username: 'admin1' }
    });
  })

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = { 
      isLoading: false,
      validateError: [ValidateProfileError.SERVER_ERROR]
    };
    expect(profileReducer(
      state as ProfileSchema, 
      updateProfileData.pending
    )).toEqual({
      isLoading: true,
      validateError: undefined
    });
  })

  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = { 
      isLoading: true
    };
    expect(profileReducer(
      state as ProfileSchema, 
      updateProfileData.fulfilled(data, '')
    )).toEqual({
      isLoading: false,
      validateError: undefined,
      readonly: true,
      form: data,
      data
    });
  })

});
