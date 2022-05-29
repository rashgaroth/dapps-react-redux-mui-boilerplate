/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { AccountBalanceWallet, Menu as BurgerMenu } from '@mui/icons-material';
import BottomNavbar from './Bottom';
import MobileDrawer from './Drawer';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const pages = ['Farming', 'Staking', 'Launchpad'];
const useStyles = makeStyles(() => ({
  text: {
    zIndex: 100,
    margin: 5,
    fontWeight: 'bold',
  },
  btnConnect: {
    minHeight: 45,
  },
}));
function NavbarComponent({ children }, props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const classes = useStyles();

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenDrawer = event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpenDrawer(true);
  };
  const handleCloseDrawer = event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpenDrawer(false);
  };
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar color='primary'>
          <Toolbar disableGutters>
            <Typography
              variant='p'
              sx={{ display: { xs: 'none', md: 'flex' } }}
              component='div'
              color='white'
              fontWeight='bold'
              fontSize={45}>
              R
            </Typography>
            {/* mobile */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size='large'
                aria-label='menu-lists'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenDrawer}
                color='inherit'>
                <BurgerMenu sx={{ color: 'white' }} />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}>
                {pages.map(page => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign='center' fontWeight='bold' color='white'>
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant='p'
              sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}
              component='div'
              color='white'
              fontWeight='bold'
              fontSize={25}>
              Rash Boilerplate
            </Typography>
            {/* desktop */}
            <Box sx={{ mx: 4, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map(page => (
                <Button key={page} sx={{ color: 'white', mx: 1 }}>
                  <Typography className={classes.text}>{page}</Typography>
                </Button>
              ))}
            </Box>
            {/* desktop */}
            <Box sx={{ flexGrow: 0 }}>
              <Button
                color='primary'
                variant='contained'
                className={classes.btnConnect}
                sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Typography color='white' fontWeight='bold'>
                  Connect Wallet
                </Typography>
              </Button>
            </Box>
            {/* mobile */}
            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                color='primary'
                variant='contained'
                className={classes.btnConnect}
                sx={{ display: { xs: 'flex', md: 'none' } }}>
                <AccountBalanceWallet sx={{ color: 'white' }} />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container maxWidth='lg' fixed>
        <Box sx={{ my: 4 }}>{children}</Box>
      </Container>
      <BottomNavbar />
      <MobileDrawer handleClose={handleCloseDrawer} handleOpen={handleOpenDrawer} openDrawer={openDrawer} />
    </>
  );
}

NavbarComponent.propTypes = {
  children: PropTypes.node,
};

export default NavbarComponent;
