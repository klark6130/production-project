import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<Article, string | undefined, ThunkConfig<string>>(
  'articleDetails/fetchArticleById',
  async (articleId, thunkAPI) => {
    
    try {
      if (!articleId) {
        throw new Error('Id of article is not set!')
      }

      const response = await thunkAPI.extra.api.get<Article>(`/articles/${articleId}`, {
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
      return thunkAPI.rejectWithValue('Ошибка при загрузке статьи');
    }
  }
)