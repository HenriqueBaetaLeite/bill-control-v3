import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  Drawer,
  MenuItem,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  List,
  Container,
  Divider,
} from '@material-ui/core';

import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import MailIcon from '@material-ui/icons/Mail';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import DashboardIcon from '@material-ui/icons/Dashboard';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  menu: {
    marginTop: theme.spacing(4),
  },
  typography: {
    margin: theme.spacing(2),
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  test: {
    background: '#',
  },
}));

const MyMenu = (props) => {
  const { open, handleMenu, history } = props;
  const classes = useStyles();

  const listItems = [
    { text: 'Meus ativos', icon: <AttachMoneyIcon />, onClick: () => history.push('/ativos') },
    { text: 'Meus passivos', icon: <MoneyOffIcon />, onClick: () => history.push('/passivos') },
    { text: 'Dashboard', icon: <DashboardIcon />, onClick: () => history.push('/dashboard') },
    { text: 'Sobre', icon: <MailIcon />, onClick: () => history.push('/sobre') },
  ];
  return (
    <Drawer anchor="left" variant="persistent" open={open} onClick={() => handleMenu()}>
      <Container className={classes.container}>
        <LocalAtmIcon style={{ cursor: 'pointer' }} onClick={() => history.push('/home')} />
        <Typography className={classes.typography} variant="subtitle1">
          RACLeite
        </Typography>
      </Container>
      <Divider />
      <List className={classes.test}>
        {listItems.map((item) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
      {/* <MenuItem className={classes.menu} onClick={() => handleMenu()}>
        Minhas receitas
      </MenuItem>
      <MenuItem onClick={() => handleMenu()}>Minhas despesas</MenuItem> */}
    </Drawer>
  );
};

export default withRouter(MyMenu);
