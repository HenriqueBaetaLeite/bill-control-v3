import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Expense from '../pages/Expense';

const TheContent = () => {
  return (
    <BrowserRouter>
      <div style={{ marginTop: '70px' }}>
        <h1>Aqui virão as rotas</h1>
        {/* <Expense /> */}
        <Switch>
          <Route exact path="/home/passivos" component={Expense} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default TheContent;
