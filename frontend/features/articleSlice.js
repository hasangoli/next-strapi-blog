import axios from 'axios';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const initialState = { data: 'data', error: false, loading: true };

export const getArticles = createAsyncThunk(
  'articles/getArticles',
  async () => {
    const res = await axios(`${process.env.NEXT_PUBLIC_API_URL}/articles`);
    const data = await res.data.data;
    return data;
  }
);

const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getArticles.pending, state => {
        state.loading = true;
        state.error = true;
      })
      .addCase(getArticles.rejected, state => {
        state.loading = true;
        state.error = true;
      })
      .addCase(getArticles.fulfilled, (state, action) => {
        console.log('action.payload: ', action.payload);
        state.data = action.payload;
        state.error = true;
        state.loading = true;
        // return { error: false, loading: false, data: action.payload };
      });
  },
});

export default articleSlice;
