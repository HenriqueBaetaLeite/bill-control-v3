import React from 'react';

import { Link, Typography } from '@material-ui/core';

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://www.linkedin.com/in/henrique-ba%C3%AAta-leite-785a4b15a/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Henrique Baêta Leite
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
