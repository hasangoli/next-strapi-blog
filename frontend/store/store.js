import { configureStore } from '@reduxjs/toolkit';
import PostsReducer from './features/postsSlice';

export const store = configureStore({
  reducer: {
    posts: PostsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
