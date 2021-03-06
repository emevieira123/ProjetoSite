import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Sobre from './pages/Sobre/sobre';
import SoftSkills from './pages/SoftSkills/softSkills';
import Contato from './pages/Contato/contato';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/softSkills" component={SoftSkills} />
        <Route path="/contato" component={Contato} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
