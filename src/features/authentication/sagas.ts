import { PayloadAction } from '@reduxjs/toolkit';
import { fork, put, take } from 'redux-saga/effects';

import { getKakaoAccessToken } from '@/apis/authentication';
import { IApiError, IKakaoAccessToken } from '@/apis/types';
import {
  fetchKakaoAccessToken,
  setAuthenticated,
} from '@/features/authentication';

import { createFetchSagaWorker } from '../helper';

const fetchKakaoAccessTokenSagaWorker = createFetchSagaWorker(
  fetchKakaoAccessToken,
  getKakaoAccessToken,
);

function* AuthenticationSagaFlow() {
  while (true) {
    const action = yield take(fetchKakaoAccessToken.fetch.type);
    yield fork(fetchKakaoAccessTokenSagaWorker, action);
    const res:
      | PayloadAction<IKakaoAccessToken>
      | PayloadAction<IApiError> = yield take([
      fetchKakaoAccessToken.success.type,
      fetchKakaoAccessToken.failure.type,
    ]);
    //TODO: login api connect
    console.log(res);
    yield put(setAuthenticated(true));
  }
}

export function* authenticationSaga() {
  yield fork(AuthenticationSagaFlow);
}
