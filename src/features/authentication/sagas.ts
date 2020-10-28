import Axios from 'axios';
import queryString from 'query-string';
import { fork, take } from 'redux-saga/effects';

import { fetchKakaoAccessToken } from '@/features/authentication';

import { createFetchSagaWorker } from '../helper';

const KAKAO_OAUTH_URI = 'https://kauth.kakao.com/oauth';

const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;

const fetchKakaoAccessTokenSagaWorker = createFetchSagaWorker(
  fetchKakaoAccessToken,
  //TODO: api 서비스로 분리
  (code: string) => {
    return Axios.post(
      `${KAKAO_OAUTH_URI}/token`,
      queryString.stringify({
        grant_type: 'authorization_code',
        client_id: KAKAO_REST_API_KEY,
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
