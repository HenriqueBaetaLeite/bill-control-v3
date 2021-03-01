import React from 'react';

import { Alert, AlertTitle } from '@material-ui/lab';

const myWarningAlert = (props) => {
  switch (props) {
    case 'email':
      return (
        <Alert severity="warning">
          <AlertTitle>Aviso</AlertTitle>
          Email no formato incorreto
        </Alert>
      );

    case 'password':
      return (
        <Alert severity="warning" className="m2">
          <AlertTitle>Aviso</AlertTitle>
          Senha deve ter mais do que 8 caracteres
        </Alert>
      );

    default:
      return (
        <Alert severity="success" className="m2">
          <AlertTitle>Aviso</AlertTitle>
          Login realizado com sucesso, redirecionando...
        </Alert>
      );
  }
};

export default myWarningAlert;
