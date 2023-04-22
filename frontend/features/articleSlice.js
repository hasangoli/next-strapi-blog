const { createSlice } = require('@reduxjs/toolkit');

const initialState = { data: [], error: false, isLoading: true };

const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setArticles: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default articleSlice;
