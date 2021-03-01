import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PrivateRoute from './pages/PrivateRoute';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/home" component={Home} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default App;
