import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { JsonSettings } from '../types/jsonSettings';
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData';
import { getJsonSettings } from '../selectors/jsonSettings';
import { setJsonSettingsMutation } from '../../api/userApi';

export const saveJsonSettings = createAsyncThunk<
    JsonSettings | undefined,
    JsonSettings,
    ThunkConfig<string>
>('user/fetchArticleById', async (newJsonSettings, thunkAPI) => {

    const userData = getUserAuthData(thunkAPI.getState());
    const currentSettings = getJsonSettings(thunkAPI.getState());

    if(!userData){
        return thunkAPI.rejectWithValue('No user value')
    }

    try {

        const response = await thunkAPI.dispatch(setJsonSettingsMutation({
            userId: userData.id,
            jsonSettings: {
                ...currentSettings,
                ...newJsonSettings
            }
        })).unwrap();

        if(!response.jsonSettings){
            thunkAPI.rejectWithValue('No json settings is response')
        }

        return response.jsonSettings;

    } catch (error) {
        // console.error(error);
        return thunkAPI.rejectWithValue('Ошибка при загрузке статьи');
    }
});
