import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export interface PrivateRouteProps extends RouteProps {
  isAuthenticated: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  isAuthenticated,
  ...rest
}) => {
  return (
    <>{isAuthenticated ? <Route {...rest} /> : <Redirect to="/adsad" />}</>
  );
};

export default PrivateRoute;
