import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Expense from '../pages/Expense';

const TheContent = () => {
  return (
    <div style={{ marginTop: '70px' }}>
      <h1>Aqui virão as rotas</h1>
      <Expense />
      <Switch>
        <Route exact path={'/passivos'} component={Expense}  />
      </Switch>
    </div>
  );
};

export default TheContent;
