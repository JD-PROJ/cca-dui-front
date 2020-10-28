import queryString from 'query-string';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { fetchKakaoAccessToken } from '@/features/authentication';

const KAKAO_OAUTH_URI = 'https://kauth.kakao.com/oauth';

const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;

const useKakaoAuthorization = () => {
  const [code, setCode] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const search = queryString.parse(window.location.search);

    if (search['code'] && typeof search['code'] === 'string') {
      setCode(search['code']);
    }
  }, []);

  useEffect(() => {
    if (code) {
      dispatch(fetchKakaoAccessToken.fetch(code));
      history.replace('/login');
    }
  }, [code, dispatch, history]);

  const openKaKaoAuthorization = useCallback(() => {
    window.open(
      `${KAKAO_OAUTH_URI}/authorize?${queryString.stringify({
        client_id: KAKAO_REST_API_KEY,
        redirect_uri: REDIRECT_URI,
        response_type: 'code',
      })}`,
      '_self',
    );
  }, []);

  return { openKaKaoAuthorization };
};

export default useKakaoAuthorization;
