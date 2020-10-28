import { createSlice } from '@reduxjs/toolkit';

import { createAsyncAction } from '../helper';

const name = 'authentication';
const authenticationInitialState = { authenticated: false };

const slice = createSlice({
  name,
  initialState: authenticationInitialState,
  reducers: {},
});

export const fetchKakaoAccessToken = createAsyncAction<string, any, any>(
  name,
  'fetchKakaoAccessToken',
);

export default slice.reducer;
