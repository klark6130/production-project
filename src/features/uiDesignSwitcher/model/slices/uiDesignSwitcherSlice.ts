
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UiDesignSwitcherSchema } from '../types/uiDesignSwitcherSchema';
import { UiDesignSwitcher } from '../types/uiDesignSwitcher';

const initialState: UiDesignSwitcherSchema = {
  error: undefined,
  data: undefined,
  isLoading: false
}

export const uiDesignSwitcherSlice = createSlice({
  name: 'uiDesignSwitcher',
  initialState,
  reducers: {
    
  },
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
})

// Action creators are generated for each case reducer function
export const { actions: uiDesignSwitcherActions } = uiDesignSwitcherSlice;
export const { reducer: uiDesignSwitcherReducer } = uiDesignSwitcherSlice;