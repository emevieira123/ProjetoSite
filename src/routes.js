import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sections from './pages/Sections/section';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Sections} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
