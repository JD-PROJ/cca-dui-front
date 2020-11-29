import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { selectAuthenticated } from '@/features/authentication';
import useKakaoAuthorization from '@/hooks/useKakaoAuthorization';

import { styled } from '../stitches.config';
import KaKaoLabel from './kakao.png';

const LoginPageWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

const KaKaoImage = styled('img', {
  width: 16,
  height: 16,
});
const KaKaoLoginButton = styled('button', {
  backgroundColor: '#FEE500',
  borderRadius: '$pill',
  color: 'rgba(0,0,0,85)',
  fontSize: '$1',
  width: 300,
  height: 40,
  border: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const KaKaoLoginText = styled('p', {
  marginLeft: '$1',
  marginRight: '$1',
});

const Login = () => {
  const authenticated = useSelector(selectAuthenticated);
  const { openKaKaoAuthorization } = useKakaoAuthorization();

  if (authenticated) return <Redirect to="/" />;

  return (
    <LoginPageWrapper>
      <KaKaoLoginButton onClick={openKaKaoAuthorization}>
        <KaKaoImage src={KaKaoLabel} />
        <KaKaoLoginText>카카오 로그인</KaKaoLoginText>
      </KaKaoLoginButton>
    </LoginPageWrapper>
  );
};

export default Login;
