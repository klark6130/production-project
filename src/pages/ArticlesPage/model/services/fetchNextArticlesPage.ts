import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageHasMore, getArticlesPageIsLoading, getArticlesPageNum } from '../selectors/articlesPageSelectors';
import { articlePageActions } from '../slices/articlesPageSlices';
import { fetchArticlesList } from './fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/fetchNextArticlesPage',
  async (_, thunkAPI) => {
    const hasMore = getArticlesPageHasMore(thunkAPI.getState());
    const page = getArticlesPageNum(thunkAPI.getState());
    const isLoading = getArticlesPageIsLoading(thunkAPI.getState());

    try {
      if (hasMore && !isLoading) {
        thunkAPI.dispatch(articlePageActions.setPage(page + 1));
        await thunkAPI.dispatch(fetchArticlesList({}));
      }
    } catch (error) {
      // console.error(error);
      return thunkAPI.rejectWithValue('Ошибка при загрузке комментариев статьи');
    }
  }
)