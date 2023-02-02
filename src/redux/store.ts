import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/auth';
import passwordRulesReducer from './slices/passwordRules';

const store = configureStore({
  reducer: {
    auth: authReducer,
    passwordRules: passwordRulesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
