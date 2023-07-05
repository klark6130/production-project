import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getProfileForm } from '../../selectors/getProfileData';
import { validateProfileData } from '../validateProfileData/validateProfileData';
import { Profile } from '@/entities/Profile';
import { ValidateProfileError } from '../../consts/consts';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const formData = getProfileForm(thunkAPI.getState());

    const errors = validateProfileData(formData);

    if (errors.length) {
      await new Promise(resolve => setTimeout(resolve, 2000));
      return thunkAPI.rejectWithValue(errors)
    }
    try {
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      const response = await thunkAPI.extra.api.put<Profile>('/profile/' + formData?.id, formData);

      if (!response.data) {
        throw new Error('error');
      }

      return response.data;
    } catch (error) {
      // console.error(error);
      return thunkAPI.rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
  }
)