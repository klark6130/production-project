import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

export const fetchArticlesList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  'articlesPage/fetchArticlesList',
  async (articleId, thunkAPI) => {

    try {
      const response = await thunkAPI.extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user'
        }
      });

      if (!response.data) {
        throw new Error('NO_DATA');
      }

      return response.data;
    } catch (error) {
      // console.error(error);
      return thunkAPI.rejectWithValue('Ошибка при загрузке комментариев статьи');
    }
  }
)