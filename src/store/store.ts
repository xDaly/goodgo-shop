import { configureStore } from "@reduxjs/toolkit";
import CategorieReducer from "./categories.slice";
import GeneralSlice from "./general.slice";
import UserReducer from "./user.slice";

export const store = configureStore({
  reducer: {
    categories: CategorieReducer,
    user: UserReducer,
    general: GeneralSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
