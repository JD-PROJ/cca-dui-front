import queryString from 'query-string';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { fetchKakaoAccessToken } from '@/features/authentication';

const KAKAO_OAUTH_URI = 'https://kauth.kakao.com/oauth';

//FIXME: Move to env
const REDIRECT_URI = 'http://localhost:3000/login';
const CLIENT_ID = '';

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
        client_id: CLIENT_ID,
        redirect_uri: REDIRECT_URI,
        response_type: 'code',
      })}`,
      '_self',
    );
  }, []);

  return { openKaKaoAuthorization };
};

export default useKakaoAuthorization;
