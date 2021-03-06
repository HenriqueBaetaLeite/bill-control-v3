import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import NotFound from './pages/NotFound';
import PrivateRoute from './pages/PrivateRoute';
import TheLayout from './containers/TheLayout';
import Expense from './pages/Expense';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/home" component={TheLayout} />
      <PrivateRoute exact path="/passivos" component={Expense} />
      {/* <Route path="*" component={NotFound} /> */}
    </Switch>
  );
};

export default App;
