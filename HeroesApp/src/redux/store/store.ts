import { configureStore } from "@reduxjs/toolkit";
import AuthUser from "../slices/auth";

export const store = configureStore({
    reducer: {
        auth: AuthUser
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch