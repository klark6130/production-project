import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User, userActions } from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localtorage';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.post<User>('/login', authData);

      if (!response.data) {
        throw new Error('Error with empty data');
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (error) {
      // console.error(error);
      return thunkAPI.rejectWithValue('Неверный логин/пароль');
    }
  }
)