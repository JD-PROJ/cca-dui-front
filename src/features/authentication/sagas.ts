import { fork, take } from 'redux-saga/effects';

import { getKaKaoAccessToken } from '@/apis/authentication';
import { fetchKakaoAccessToken } from '@/features/authentication';

import { createFetchSagaWorker } from '../helper';

const fetchKakaoAccessTokenSagaWorker = createFetchSagaWorker(
  fetchKakaoAccessToken,
  getKaKaoAccessToken,
);

function* AuthenticationSagaFlow() {
  while (true) {
    const action = yield take(fetchKakaoAccessToken.fetch.type);
    yield fork(fetchKakaoAccessTokenSagaWorker, action);
    const res = yield take(fetchKakaoAccessToken.success.type);
    //TODO: login api connect
    console.log(res);
  }
}

export function* authenticationSaga() {
  yield fork(AuthenticationSagaFlow);
}
