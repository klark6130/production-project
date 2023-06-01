const firstUpper = require('../../firstUpper.js');

module.exports = (sliceName) => {
  return `
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ${firstUpper(sliceName)}Schema } from '../types/${sliceName}Schema';
import { ${firstUpper(sliceName)} } from '../types/${sliceName}';

const initialState: ${firstUpper(sliceName)}Schema = {
  error: undefined,
  data: undefined,
  isLoading: false
}

export const ${sliceName}Slice = createSlice({
  name: '${sliceName}',
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
export const { actions: ${sliceName}Actions } = ${sliceName}Slice;
export const { reducer: ${sliceName}Reducer } = ${sliceName}Slice;`
}
