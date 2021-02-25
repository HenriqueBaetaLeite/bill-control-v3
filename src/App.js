import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';

import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default App;
