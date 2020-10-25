import { Button, Col } from 'antd';
import React from 'react';

const Login = () => {
  return (
    <Col span={6}>
      <Button
        block
        type="primary"
        style={{
          background: '#FEE500',
          borderStyle: 'hidden',
          color: '#000000',
        }}
      >
        카카오로 시작하기
      </Button>
    </Col>
  );
};

export default Login;
