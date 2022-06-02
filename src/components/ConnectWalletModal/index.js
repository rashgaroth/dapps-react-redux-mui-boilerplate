/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { Avatar, Button, Grid, Stack, Typography } from '@mui/material';
import ModalWrapper from 'components/ModalWrapper';

const useStyles = makeStyles(_theme => {
  return {
    root: {},
    walletItem: {
      transition: 'background 0.5s, color 1s',
      borderRadius: _theme.shape.button.medium,
      border: `1px solid ${_theme.palette.primary[800]}`,
      padding: 5,
      '&:hover': {
        backgroundColor: _theme.palette.primary.light,
      },
    },
    walletText: {
      '&:hover': {
        color: _theme.palette.primary[800],
      },
    },
  };
});

const wallets = [
  {
    id: 1,
    name: 'Metamask',
    imgSrc: '/images/wallets/metamask.png',
  },
  {
    id: 2,
    name: 'Wallet Connect',
    imgSrc: '/images/wallets/walletconnect.png',
  },
  {
    id: 3,
    name: 'Torus',
    imgSrc: '/images/wallets/torus.svg',
  },
];

function Walletsitem({ onClickWallet }) {
  const classes = useStyles();
  return (
    <Grid container direction='column' justifyContent='center' alignItems='center' justifyItems='center' spacing={2}>
      {wallets.map(x => (
        <Grid item width='100%' className={classes.walletGrid} key={x.id}>
          <div
            onClick={() => {
              onClickWallet(x.id);
            }}>
            <Stack direction='row' justifyContent='start' alignItems='center' className={classes.walletItem}>
              <Avatar variant='rounded' sx={{ width: 50, height: 50, cursor: 'pointer' }} src={x.imgSrc} />
              <Typography
                sx={{ mx: 5, cursor: 'pointer' }}
                className={classes.walletText}
                variant='h4'
                color='white'
                fontWeight='bold'>
                {x.name}
              </Typography>
            </Stack>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}

Walletsitem.propTypes = {
  onClickWallet: PropTypes.func,
};

function ConnectWalletModal({ open, handleClose, onClickWallet, ...other }) {
  return (
    <ModalWrapper open={open} handleClose={handleClose} width={300} {...other}>
      <Walletsitem onClickWallet={onClickWallet} />
    </ModalWrapper>
  );
}

ConnectWalletModal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  onClickWallet: PropTypes.func,
};

export default ConnectWalletModal;
