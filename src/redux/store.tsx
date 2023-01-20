import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from '../features/auth'
import { walletReducer, walletApi } from "../features/wallet";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    wallet: walletReducer,
    [walletApi.reducerPath]: walletApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(walletApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>
