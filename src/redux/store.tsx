import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from '../features/auth'
import { walletReducer } from "../features/wallet";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    wallet: walletReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>
