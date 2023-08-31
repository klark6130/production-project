import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {
    error: '',
    text: '',
};

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //   builder
    //     .addCase(loginByUsername.pending, (state, action) => {
    //       state.error = undefined;
    //       state.isLoading = true;
    //     })
    //     .addCase(loginByUsername.fulfilled, (state, action) => {
    //       state.error = undefined;
    //       state.isLoading = false;
    //       console.log('action when fullfield', action);
    //     })
    //     .addCase(loginByUsername.rejected, (state, action) => {
    //       state.isLoading = false;
    //       console.log('action when error', action)
    //       state.error = action.payload
    //     })
    // }
});

// Action creators are generated for each case reducer function
export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
