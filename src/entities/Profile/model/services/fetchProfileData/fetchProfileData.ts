import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.get<Profile>('/profile');

      if (!response.data) {
        throw new Error('NO_DATA');
      }

      return response.data;
    } catch (error) {
      // console.error(error);
      return thunkAPI.rejectWithValue('Неверный логин/пароль');
    }
  }
)