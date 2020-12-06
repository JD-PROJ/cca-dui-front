import Axios, { AxiosError, AxiosResponse } from 'axios';
import queryString from 'query-string';

import { ApiError, IKakaoAccessToken } from './types';

const KAKAO_OAUTH_URI = 'https://kauth.kakao.com/oauth';

const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;

export const getKakaoAccessToken = (code: string) => {
  return new Promise<IKakaoAccessToken>((resolve, reject) => {
    Axios.post(
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
    )
      .then((response: AxiosResponse) => resolve(response.data))
      .catch((err: AxiosError) => reject(new ApiError(err)));
  });
};
