import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
  'articleDetails/fetchCommentsByArticleId',
  async (articleId, thunkAPI) => {

    if (!articleId) {
      return thunkAPI.rejectWithValue('No article id in params');
    }

    try {
      const response = await thunkAPI.extra.api.get<Comment[]>('/comments/', {
        params: {
          articleId,
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