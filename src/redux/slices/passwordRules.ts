import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';

export type PasswordRules = {
  [ruleName: string]: boolean | number,
};

type PasswordRulesState = {
  passwordRules?: PasswordRules,
};

const initialState: PasswordRulesState = {};

const passwordRulesSlice = createSlice({
  name: 'passwordRules',
  initialState,
  reducers: {
    setPasswordRules: (
      state: PasswordRulesState,
      { payload }: PayloadAction<PasswordRules>,
    ) => {
      state.passwordRules = payload;
    },
  },
});

export const { setPasswordRules } = passwordRulesSlice.actions;

export const selectPasswordRules
  = (state: RootState): PasswordRules | undefined =>
    state.passwordRules.passwordRules;

export default passwordRulesSlice.reducer;
