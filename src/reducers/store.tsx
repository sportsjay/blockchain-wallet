import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Infer the `MainAppState` and `AppDispatch` types from the store itself
export type MainAppState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type MainAppDispatch = typeof store.dispatch;
