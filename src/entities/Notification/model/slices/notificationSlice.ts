import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotificationSchema } from '../types/notificationSchema';
import { Notification } from '../types/notification';

const initialState: NotificationSchema = {
    error: undefined,
    data: undefined,
    isLoading: false,
};

export const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {},
    //,
    // extraReducers: builder => {
    //   builder
    //     .addCase(.pending, (state, action) => {

    //     })
    //     .addCase(.fulfilled, (state, action: PayloadAction<A>) => {
    //     })
    //     .addCase(.rejected, (state, action) => {
    //     })
    // }
});

// Action creators are generated for each case reducer function
export const { actions: notificationActions } = notificationSlice;
export const { reducer: notificationReducer } = notificationSlice;
