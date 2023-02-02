import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';

type AuthState = {
  isAuthenticated: boolean,
};

const initialState: AuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuthenticated: (
      state: AuthState,
      { payload }: PayloadAction<boolean>,
    ) => {
      state.isAuthenticated = payload;
    },
  },
});

export const { setIsAuthenticated } = authSlice.actions;

export const selectIsAuthenticated
  = (state: RootState): boolean => state.auth.isAuthenticated;

export default authSlice.reducer;
