import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import axios from 'axios';
import { getArticleDetailsData } from '@/entities/Article/model/selectors/articleDetails';
import { getUserAuthData } from '@/entities/User';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'articleDetails/addCommentForArticle',
  async (text, thunkAPI) => {

    const userData = getUserAuthData(thunkAPI.getState());
    const article = getArticleDetailsData(thunkAPI.getState());

    if (!userData || !text || !article) {
      return thunkAPI.rejectWithValue('no data')
    }

    try {
      const response = await thunkAPI.extra.api.post<Comment>('/comments', {
        articleId: article?.id,
        userId: userData.id,
        text
      });

      if (!response.data) {
        throw new Error('Error with empty data');
      }

      thunkAPI.dispatch(fetchCommentsByArticleId(article.id));

      return response.data;
    } catch (error) {
      // console.error(error);
      return thunkAPI.rejectWithValue('Неверный логин/пароль');
    }
  }
)