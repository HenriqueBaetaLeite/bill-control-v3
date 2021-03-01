import React, { useEffect, useRef } from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import bg1 from '../assets/images/bg1.png';
import bg2 from '../assets/images/bg2.png';
import frajola from '../assets/images/frajola.png';
import marvin from '../assets/images/marvin.png';

import { TweenMax } from 'gsap';

const images = [frajola, marvin, bg1, bg2];

const randomImage = images[Math.round(Math.random() * 3)];

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  typography: {
    margin: theme.spacing(2),
  },
}));

const NotFound = () => {
  const classes = useStyles();

  let fourOfour = useRef(null);
  let backImage = useRef(null);

  useEffect(() => {
    TweenMax.from(fourOfour, 2, { rotate: 900, ease: 'bounce', delay: 2 });
    TweenMax.from(backImage, 1.2, { opacity: 0, y: -500 });
  }, []);
  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <Typography ref={(el) => (fourOfour = el)} variant="h4">
        404
      </Typography>
      <Typography className={classes.typography} variant="h6">
        Página não encontrada...
      </Typography>
      <img ref={(el) => (backImage = el)} height="300px" alt="notfound" src={randomImage} />
    </Container>
  );
};

export default NotFound;
