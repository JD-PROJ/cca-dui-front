import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IApiError, IKakaoAccessToken } from '@/apis/types';

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
export const fetchKakaoAccessToken = createAsyncAction<
  string,
  IKakaoAccessToken,
  IApiError
>(name, 'fetchKakaoAccessToken');
export const selectAuthenticated = (state: RootState) =>
  state.authentication.authenticated;

export default slice.reducer;
