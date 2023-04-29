import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageInited } from '../selectors/articlesPageSelectors';
import { articlePageActions } from '../slices/articlesPageSlices';
import { fetchArticlesList } from './fetchArticlesList';

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;
    const inited = getArticlesPageInited(getState());

    if (!inited) {
      dispatch(articlePageActions.initState())
      dispatch(fetchArticlesList({
        page: 1
      }));
    }
  }
)