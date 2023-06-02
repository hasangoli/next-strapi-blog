import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const postsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
  },
});

export const { increment } = postsSlice.actions;

export default postsSlice.reducer;
