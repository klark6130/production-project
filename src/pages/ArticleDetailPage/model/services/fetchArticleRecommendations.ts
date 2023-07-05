import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';

export const fetchArticleRecommendations = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  'articlesDetailPage/fetchArticleRecommendations',
  async (props, thunkAPI) => {

    try {
      
      const response = await thunkAPI.extra.api.get<Article[]>('/articles', {
        params: {
          _limit: 4
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