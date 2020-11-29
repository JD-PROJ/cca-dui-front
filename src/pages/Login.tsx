import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { selectAuthenticated } from '@/features/authentication';
import useKakaoAuthorization from '@/hooks/useKakaoAuthorization';

const Login = () => {
  const authenticated = useSelector(selectAuthenticated);
  const { openKaKaoAuthorization } = useKakaoAuthorization();

  if (authenticated) return <Redirect to="/" />;

  return (
    <button
      style={{
        background: '#FEE500',
        borderStyle: 'hidden',
        color: '#000000',
      }}
      onClick={openKaKaoAuthorization}
    >
      카카오로 시작하기
    </button>
  );
};

export default Login;
