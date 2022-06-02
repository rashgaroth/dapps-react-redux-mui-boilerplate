import React from 'react';
import { useSelector } from 'react-redux';
import { styled } from '@mui/styles';
import { Grid, Paper, Stack, Typography } from '@mui/material';
import { toSmallUnit, truncateWalletAddress } from 'utilities/core/string';

const Item = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.text.primary,
  padding: 10,
  width: 200,
  height: 'auto',
  backgroundColor: '#FFF',
}));

function Home() {
  const selector = useSelector(state => state.globalReducer);
  const { wallet } = selector;
  const { account, balance } = wallet;
  return (
    <Grid container direction='row' alignItems='start' spacing={4} m={2}>
      <Grid item>
        <Item elevation={12}>
          <Stack direction='column'>
            <Typography variant='h3' fontWeight='bold'>
              Account
            </Typography>
            {account !== '' ? (
              <Typography variant='p'>{truncateWalletAddress(account, 6)}</Typography>
            ) : (
              <Typography variant='p' color='error'>
                Please Connect Your Wallet
              </Typography>
            )}
          </Stack>
        </Item>
      </Grid>
      <Grid item>
        <Item elevation={12}>
          <Stack direction='column'>
            <Typography variant='h3' fontWeight='bold'>
              BNB Balance
            </Typography>
            {balance !== 0 ? (
              <Typography variant='p'>{`${toSmallUnit(balance, 18)} BNB`}</Typography>
            ) : (
              <Typography variant='p' color='error'>
                Please Connect Your Wallet
              </Typography>
            )}
          </Stack>
        </Item>
      </Grid>
    </Grid>
  );
}

Home.propTypes = {};

export default Home;
