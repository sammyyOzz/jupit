import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthSlice {
  user: boolean;
}

const initialState: AuthSlice = {
  user: false
}

export const authSlice = createSlice({
  initialState,
  name: 'authSlice',
  reducers: {
    setUser(state, action: PayloadAction<boolean>) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions

export default authSlice.reducer;