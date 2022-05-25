/* eslint-disable import/prefer-default-export */
import * as types from './constants';

export const setHelloExample = (data = 'nft') => ({
  type: types.HELLO_EXAMPLE,
  data,
});
