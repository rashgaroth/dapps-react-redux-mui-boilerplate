// action - state management
import * as actionTypes from './constants';

export const initialState = {
  hello: 'world',
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

// eslint-disable-next-line default-param-last
const mint = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HELLO_EXAMPLE:
      return {
        ...state,
        hello: 'mint',
      };
    default:
      return state;
  }
};

export default mint;
