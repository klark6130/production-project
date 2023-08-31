import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleRecommndationsIsLoading = (state: StateSchema) =>
    state.articleDetailsPage?.recommendations?.isLoading;
export const getArticleRecommndationsError = (state: StateSchema) =>
    state.articleDetailsPage?.recommendations?.error;
