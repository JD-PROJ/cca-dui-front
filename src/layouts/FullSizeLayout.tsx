import { Row } from 'antd';
import React from 'react';

import { LayoutProps } from './types';

const FullSizeLayoutStyle = { height: '100vh' };

const FullSizeLayout = ({ children }: LayoutProps) => {
  return (
    <Row style={FullSizeLayoutStyle} justify="center" align="middle">
      {children}
    </Row>
  );
};

export default FullSizeLayout;
