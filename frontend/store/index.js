import articleSlice from '@/features/articleSlice';
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () =>
  configureStore({
    reducer: {
      articles: articleSlice.reducer,
    },
  });

export const wrapper = createWrapper(makeStore, { debug: true });
