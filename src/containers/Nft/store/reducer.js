// action - state management
import * as actionTypes from './constants';

export const initialState = {
  hello: 'world',
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

// eslint-disable-next-line default-param-last
const nft = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HELLO_EXAMPLE:
      return {
        ...state,
        hello: 'nft',
      };
    default:
      return state;
  }
};

export default nft;
