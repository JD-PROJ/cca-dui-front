import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '..';
import { createAsyncAction } from '../helper';

const name = 'authentication';
const authenticationInitialState = { authenticated: false };

const slice = createSlice({
  name,
  initialState: authenticationInitialState,
  reducers: {
    setAuthenticated: (state, { payload }: PayloadAction<boolean>) => ({
      ...state,
      authenticated: payload,
    }),
  },
});

export const { setAuthenticated } = slice.actions;
export const fetchKakaoAccessToken = createAsyncAction<string, any, any>(
  name,
  'fetchKakaoAccessToken',
);
export const selectAuthenticated = (state: RootState) =>
  state.authentication.authenticated;

export default slice.reducer;
