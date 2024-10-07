import { configureStore } from '@reduxjs/toolkit'
import gifSlice from '../slices/gif'
// ...

export const store = configureStore({
    reducer: {
        gif: gifSlice
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch