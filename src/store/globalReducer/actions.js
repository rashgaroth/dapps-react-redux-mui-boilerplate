/* eslint-disable import/prefer-default-export */
import { SET_ACCOUNT } from './constant';

export const setWallet = (account, balance, wallet) => ({
  type: SET_ACCOUNT,
  balance,
  account,
  wallet,
});
