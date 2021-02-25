import React, { useRef, useEffect, useState } from 'react';
import { Button, CssBaseline, TextField, Box, Typography, Container } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import LocalAtmTwoToneIcon from '@material-ui/icons/LocalAtmTwoTone';
import { makeStyles } from '@material-ui/core/styles';

import Copyright from '../components/Copyright';

import { TweenMax, Power3 } from 'gsap';

import { validateEmail } from '../utils/validateEmail';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    margin: theme.spacing(3),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const myAlert = (props) =>
  props === 'email' ? (
    <Alert severity="warning">
      <AlertTitle>Aviso</AlertTitle>
      Email faltando ou no formato incorreto
    </Alert>
  ) : (
    <Alert severity="warning" className="m2">
      <AlertTitle>Aviso</AlertTitle>
      Senha faltando ou menor do que 8 caracteres
    </Alert>
  );

export default function Login() {
  const classes = useStyles();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [wrongEmailInput, setWrongEmailInput] = useState(false);
  const [wrongPasswordInput, setWrongPasswordInput] = useState(false);

  let LogoIcon = useRef(null);
  let buttonAnime = useRef(null);
  let passwordAnime = useRef(null);
  let emailAnime = useRef(null);

  useEffect(() => {
    // TweenMax.from(buttonAnime, 3, { opacity: 0, y: -50, ease: Power3.easeOut });

    // TweenMax.from(LogoIcon, 6, { opacity: 0, ease: Power3.easeInOut, delay: 0.3 });

    TweenMax.staggerFrom([emailAnime, passwordAnime], 0.6, { y: -60, ease: 'ease-in' }, 0.1);

    TweenMax.staggerFrom(
      [buttonAnime, LogoIcon],
      1,
      { scale: 2, opacity: 0, ease: Power3.easeInOut },
      0.4,
    );

    TweenMax.to(LogoIcon, 2, { scale: 2, ease: 'bounce', delay: 2 });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !validateEmail(email)) return setWrongEmailInput(true);

    if (!password || password.length < 8) return setWrongPasswordInput(true);

    console.log('clicked');
    console.log(email, password);
  };

  const handleChange = (event) => {
    const { id, value } = event.target;

    setWrongEmailInput(false);
    setWrongPasswordInput(false);

    switch (id) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography variant="h5">RACLeite Controle Financeiro v-3.0</Typography>

        <LocalAtmTwoToneIcon ref={(el) => (LogoIcon = el)} className={classes.icon} />

        <Typography component="h1" variant="h5">
          Faça Login
        </Typography>

        {wrongEmailInput ? myAlert('email') : null}
        {wrongPasswordInput ? myAlert('password') : null}

        <form autoComplete="off" onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
            error={wrongEmailInput}
            ref={(el) => (emailAnime = el)}
            autoComplete="off"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            type="email"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            error={wrongPasswordInput}
            ref={(el) => (passwordAnime = el)}
            autoComplete="off"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            onChange={handleChange}
          />

          <Button
            ref={(el) => (buttonAnime = el)}
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Entrar
          </Button>
        </form>
      </div>
      <Box mt={10}>
        <Copyright />
      </Box>
    </Container>
  );
}
