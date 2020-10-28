import Axios from 'axios';
import queryString from 'query-string';
import { fork, take } from 'redux-saga/effects';

import { fetchKakaoAccessToken } from '@/features/authentication';

import { createFetchSagaWorker } from '../helper';

const KAKAO_OAUTH_URI = 'https://kauth.kakao.com/oauth';

//FIXME: Move to env
const REDIRECT_URI = 'http://localhost:3000/login';
const CLIENT_ID = '';

const fetchKakaoAccessTokenSagaWorker = createFetchSagaWorker(
  fetchKakaoAccessToken,
  //TODO: api 서비스로 분리
  (code: string) => {
    return Axios.post(
      `${KAKAO_OAUTH_URI}/token`,
      queryString.stringify({
        grant_type: 'authorization_code',
        client_id: CLIENT_ID,
        redirect_uri: REDIRECT_URI,
        code,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      },
    );
  },
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
