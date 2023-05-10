import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, ArticleType } from 'entities/Article';
import { getArticlesPageLimit, getArticlesPageNum, getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageType } from '../selectors/articlesPageSelectors';
import { addQueryParams } from 'shared/lib/url/addQueryParams';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface FetchArticlesListProps {
  replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
  'articlesPage/fetchArticlesList',
  async (props, thunkAPI) => {
    const limit = getArticlesPageLimit(thunkAPI.getState());
    const sort = getArticlesPageSort(thunkAPI.getState());
    const order = getArticlesPageOrder(thunkAPI.getState());
    const search = getArticlesPageSearch(thunkAPI.getState());
    const page = getArticlesPageNum(thunkAPI.getState());
    const type = getArticlesPageType(thunkAPI.getState());

    try {
      addQueryParams({
        sort,
        order,
        search,
        type
      })
      const response = await thunkAPI.extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
          _sort: sort,
          _order: order,
          q: search,
          type: type === ArticleType.ALL ? undefined : type
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