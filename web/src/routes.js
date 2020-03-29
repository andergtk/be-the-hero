import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import NewIncident from './pages/NewIncident';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/incidents/new" exact component={NewIncident} />
      </Switch>
    </BrowserRouter>
  )
};