import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { selectAuthenticated } from '@/features/authentication';
import { DefaultLayout, FullSizeLayout } from '@/layouts';

import PrivateRoute from './PrivateRoute';

const Login = lazy(() => import('@/pages/Login'));
const Schedule = lazy(() => import('@/pages/Schedule'));
const Main = lazy(() => import('@/pages/Main'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const App = () => {
  const authenticated = useSelector(selectAuthenticated);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading</div>}>
        <Switch>
          <FullSizeLayout>
            <Switch>
              <Route exact path="/login" component={Login} />
              <DefaultLayout>
                <Switch>
                  <PrivateRoute
                    isAuthenticated={authenticated}
                    exact
                    path="/"
                    component={Main}
                  />
                  <PrivateRoute
                    isAuthenticated={authenticated}
                    exact
                    path="/schedule/:id"
                    component={Schedule}
                  />
                </Switch>
              </DefaultLayout>
              <Route component={NotFound} />
            </Switch>
          </FullSizeLayout>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
