const { createSlice } = require('@reduxjs/toolkit');

const articleSlice = createSlice({
  name: 'articles',
  initialState: [],
  reducers: {
    setArticles: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default articleSlice;
