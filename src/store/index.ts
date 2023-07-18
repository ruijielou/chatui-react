import { configureStore, combineReducers } from '@reduxjs/toolkit';
import countSlice from "./slice/count"

const counterReducer = combineReducers(
    {
        count: countSlice.reducer
    })

// const commentsReducer = {}
// const usersReducer = {}

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        // comments: commentsReducer,
        // users: usersReducer,
    },
});

// 从 store 本身推断 `RootState` 和 `AppDispatch` 类型
export type RootState = ReturnType<typeof store.getState>;
// 推断类型：{posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;