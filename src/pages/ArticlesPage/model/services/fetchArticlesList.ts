import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesPageLimit } from '../selectors/articlesPageSelectors';

interface FetchArticlesListProps {
  page?: number
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
  'articlesPage/fetchArticlesList',
  async (props, thunkAPI) => {
    const { page = 1 } = props;
    const limit = getArticlesPageLimit(thunkAPI.getState());
    try {
      const response = await thunkAPI.extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page
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