import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
// import CloseIcon from '@material-ui/icons/Close';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MyMenu from '../components/MyMenu';

import { TweenMax } from 'gsap';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  toolBarStyles: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const TheHeader = () => {
  const history = useHistory();
  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  let iconMenuAnime = useRef(null);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
    if (openMenu) {
      return TweenMax.to(iconMenuAnime, 0.4, { x: 0, rotate: 180, ease: 'ease-out' });
    } else {
      return TweenMax.to(iconMenuAnime, 0.4, { x: 180, rotate: 90, ease: 'ease-out' });
    }
  };

  const openLogoutMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeLogoutMenu = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    localStorage.removeItem('userLogin');
    setAnchorEl(null);
    console.log('fui...');
    history.push('/');
  };

  return (
    <AppBar>
      <Toolbar className={classes.toolBarStyles}>
        <IconButton onClick={handleMenu}>
          <MenuIcon ref={(el) => (iconMenuAnime = el)} color="secondary" />
        </IconButton>
        <Typography variant="subtitle1">RACLeite Controle de Finanças</Typography>
        <IconButton onClick={openLogoutMenu}>
          <ExitToAppIcon color="secondary" />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={closeLogoutMenu}
        >
          <MenuItem onClick={closeLogoutMenu}>Cancelar</MenuItem>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
      </Toolbar>

      <MyMenu open={openMenu} handleMenu={handleMenu} />
    </AppBar>
  );
};

export default TheHeader;
