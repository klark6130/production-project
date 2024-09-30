import { ThunkConfig } from '@/app/providers/StoreProvider';
import { LOCAL_STORAGE_LAST_DESIGN_KEY, USER_LOCALSTORAGE_KEY } from '@/shared/const/localtorage';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserDataByIdQuery } from '../../api/userApi';
import { User } from '../types/user';

export const initAuthData = createAsyncThunk<
    User,
    void,
    ThunkConfig<string>
>('user/initAuthData', async (_, thunkAPI) => {

    const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

    if(!userId){
        return thunkAPI.rejectWithValue('No user value')
    }

    try {

        const response = await thunkAPI.dispatch(
            getUserDataByIdQuery(userId)
        ).unwrap();

        localStorage.setItem(LOCAL_STORAGE_LAST_DESIGN_KEY, response.features?.isAppRedesigned ? 'new' : 'old')

        return response;

    } catch (error) {
        // console.error(error);
        return thunkAPI.rejectWithValue('Ошибка при загрузке статьи');
    }
});
