import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageInited } from '../selectors/articlesPageSelectors';
import { articlePageActions } from '../slices/articlesPageSlices';
import { fetchArticlesList } from './fetchArticlesList';
import { URLSearchParams } from 'url';
import { ArticleSortField, ArticleType } from 'entities/Article';
import { SortOrder } from 'shared/types';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  async (searchParams, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;
    const inited = getArticlesPageInited(getState());

    if (!inited) {
      const orderFromUrl = searchParams.get('order') as SortOrder;
      const sortFromUrl = searchParams.get('sort') as ArticleSortField;
      const searchFromUrl = searchParams.get('search');
      const typeFromUrl = searchParams.get('type') as ArticleType;

      if (orderFromUrl) {
        thunkAPI.dispatch(articlePageActions.setOrder(orderFromUrl))
      }

      if (sortFromUrl) {
        thunkAPI.dispatch(articlePageActions.setSort(sortFromUrl))
      }

      if (searchFromUrl) {
        thunkAPI.dispatch(articlePageActions.setSearch(searchFromUrl))
      }

      if (typeFromUrl) {
        thunkAPI.dispatch(articlePageActions.setType(typeFromUrl))
      }

      dispatch(articlePageActions.initState())
      dispatch(fetchArticlesList({}));
    }
  }
)