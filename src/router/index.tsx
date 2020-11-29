import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { selectAuthenticated } from '@/features/authentication';
import { DefaultLayout, FullSizeLayout } from '@/layouts';
import * as Pages from '@/pages';

import PrivateRoute from './PrivateRoute';

const App = () => {
  const authenticated = useSelector(selectAuthenticated);

  return (
    <BrowserRouter>
      <Switch>
        <FullSizeLayout>
          <Switch>
            <Route exact path="/login" component={Pages.Login} />
            <DefaultLayout>
              <Switch>
                <PrivateRoute
                  isAuthenticated={authenticated}
                  exact
                  path="/"
                  component={Pages.Main}
                />
              </Switch>
            </DefaultLayout>
            <Route component={Pages.NotFound} />
          </Switch>
        </FullSizeLayout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
