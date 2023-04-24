import { HYDRATE } from "next-redux-wrapper";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = { data: [], error: false, isLoading: true };

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setArticles: (state, action) => {
      state.data = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      return { ...state, ...action.payload };
    });
  },
});

export default articleSlice;
