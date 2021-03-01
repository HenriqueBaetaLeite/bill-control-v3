import React from 'react';
import { Container, Typography } from '@material-ui/core';

import TheHeader from '../components/TheHeader';

const Home = () => {
  return (
    <Container>
      <TheHeader />
      <Typography variant="h1">RACLeite</Typography>
    </Container>
  );
};

export default Home;
