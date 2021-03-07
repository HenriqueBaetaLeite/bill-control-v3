import React, { useRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, CssBaseline, TextField, Box, Typography, Container } from '@material-ui/core';

import LocalAtmTwoToneIcon from '@material-ui/icons/LocalAtmTwoTone';
import { makeStyles } from '@material-ui/core/styles';

import Copyright from '../components/Copyright';
import myWarningAlert from '../components/WarningAlert';

import { TweenMax, TweenLite, Power3 } from 'gsap';

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
  div: {
    marginTop: theme.spacing(4),
  },
}));

export default function Login() {
  const history = useHistory();
  const classes = useStyles();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [wrongEmailInput, setWrongEmailInput] = useState(false);
  const [wrongPasswordInput, setWrongPasswordInput] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  let LogoIcon = useRef(null);
  let buttonAnime = useRef(null);
  let passwordAnime = useRef(null);
  let emailAnime = useRef(null);

  useEffect(() => {
    TweenMax.staggerFrom([emailAnime, passwordAnime], 1.2, { y: -80, ease: 'ease-in' }, 0.1);

    TweenMax.staggerFrom(
      [buttonAnime, LogoIcon],
      1,
      { scale: 2, opacity: 0, ease: Power3.easeInOut },
      0.4,
    );

    TweenMax.to(LogoIcon, 2, { scale: 1.7, ease: 'elastic', delay: 2 });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !validateEmail(email)) {
      TweenLite.to(emailAnime, 0.5, { scale: 1.05 });
      TweenLite.to(emailAnime, 0.5, { scale: 1, delay: 0.6 });
      return setWrongEmailInput(true);
    }

    if (!password || password.length < 8) {
      TweenLite.to(passwordAnime, 0.5, { scale: 1.05 });
      TweenLite.to(passwordAnime, 0.5, { scale: 1, delay: 0.6 });
      return setWrongPasswordInput(true);
    }

    setLoginSuccess(true);

    localStorage.setItem('userLogin', 'true');

    setTimeout(() => history.push('./home'), 2000);
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
        <Typography variant="h6">RACLeite Controle Financeiro v-3.0</Typography>

        <LocalAtmTwoToneIcon ref={(el) => (LogoIcon = el)} className={classes.icon} />

        <Typography variant="h6">Faça Login</Typography>
        <div className={classes.div}>
          {wrongEmailInput && myWarningAlert('email')}
          {wrongPasswordInput && myWarningAlert('password')}
          {loginSuccess && myWarningAlert('login')}
        </div>

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
