/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Box, Button, Container, Slide, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import { makeStyles } from '@mui/styles';

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

const pages = ['Products', 'Pricing', 'Blog'];
const useStyles = makeStyles(() => ({
  text: {
    zIndex: 100,
    margin: 5,
  },
}));
function NavbarComponent({ children }, props) {
  const classes = useStyles();
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar color='primary'>
          <Toolbar>
            <Typography variant='p' component='div' color='white' fontWeight='bold' fontSize={45}>
              R
            </Typography>
            <Box sx={{ mx: 4, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map(page => (
                <Button key={page} sx={{ color: 'white', mx: 1 }}>
                  <Typography className={classes.text}>{page}</Typography>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container maxWidth='lg' fixed>
        <Box sx={{ my: 4 }}>{children}</Box>
      </Container>
    </>
  );
}

NavbarComponent.propTypes = {
  children: PropTypes.node,
};

export default NavbarComponent;
