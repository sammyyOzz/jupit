import { createSlice } from '@reduxjs/toolkit';

interface WalletSlice {
  showGraph: boolean;
}

const initialState: WalletSlice = {
  showGraph: true
}

export const walletSlice = createSlice({
  initialState,
  name: 'walletSlice',
  reducers: {
    toggleAssetCard(state) {
      state.showGraph = !state.showGraph;
    },
  },
});

export const { toggleAssetCard } = walletSlice.actions

export default walletSlice.reducer;