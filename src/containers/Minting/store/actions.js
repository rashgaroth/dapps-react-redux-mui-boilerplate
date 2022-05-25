import * as types from './constants';

export const setHelloExample = (data = 'mint') => ({
  type: types.HELLO_EXAMPLE,
  data
});