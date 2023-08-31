import { StateSchema } from '@/app/providers/StoreProvider';

export const getProfileData = (state: StateSchema) => {
    return state.profile?.data;
};

export const getProfileForm = (state: StateSchema) => {
    return state.profile?.form;
};

export const getProfileIsLoading = (state: StateSchema) =>
    state.profile?.isLoading;

export const getProfileError = (state: StateSchema) => state.profile?.error;

export const getProfileReadonly = (state: StateSchema) =>
    state.profile?.readonly;

export const getProfileValidateErrors = (state: StateSchema) =>
    state.profile?.validateError;
