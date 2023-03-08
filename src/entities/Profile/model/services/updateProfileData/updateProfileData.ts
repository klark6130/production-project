import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileData';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const formData = getProfileForm(thunkAPI.getState());
    try {
      const response = await thunkAPI.extra.api.put<Profile>('/profile', formData);

      return response.data;
    } catch (error) {
      // console.error(error);
      return thunkAPI.rejectWithValue('Неверный логин/пароль');
    }
  }
)