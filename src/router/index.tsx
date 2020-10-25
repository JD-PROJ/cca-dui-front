import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { FullSizeLayout } from '@/layouts';
import * as Pages from '@/pages';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <FullSizeLayout>
          <Switch>
            <Route exact path="/login" component={Pages.Login} />
            <Route component={Pages.NotFound} />
          </Switch>
        </FullSizeLayout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
